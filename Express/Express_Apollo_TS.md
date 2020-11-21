일단 Apollo Server 환경설정부터 시작한다.

## 설치

```bash
npm i express apollo-server-express
npm i graphql graphql-tools
npm i -D ts-node typescript nodemon
```

일단 다음 모듈을 설치한다.

- `express`: NodeJS 웹 프레임워크
- `apollo-server-expres`s: express 환경에서 Apollo Server 환경을 쉽게 구축할 수 있게 도와주는 라이브러리
- `graphql`: GraphQL 쿼리를 사용하기 위해 필요한 모듈
- `graphql-tools`: GraphQL 스키마를 설정할 때 도움을 주는 라이브러리
- `typescript`: 타입스크립트를 사용하기 위해 필요한 모듈
- `ts-node`, `nodemon`: 개발 환경 설정하기 위한 모듈

## TypeScript 설정

```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es2015", "es2016", "es2017", "es2018", "es2019", "es2020"],
    "outDir": "./build",

    // sourceMap
    "sourceMap": true,

    // module
    "module": "commonjs",
    "moduleResolution": "node",
    "esModuleInterop": true,

    // lint
    "strict": true,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "noFallthroughCasesInSwitch": true,

    // more spec
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

`tsconfig.json`에 다음과 같이 타입스크립트 기본 설정을 추가한다.

## Apollo Server 구성

### Schema 분기 처리

Apollo Server를 구성하기 위해서는 일단 스키마를 작성해야 한다. 그런데 한 스키마 파일 안에 모든 GraphQL 타입과 resolver 함수(API 함수)를 구성하면 유지보수와 관리가 힘들기 때문에 해당 파일들을 분기처리할 수 있도록 설정을 해야 한다.

```tsx
import {
  makeExecutableSchema,
  mergeTypeDefs,
  mergeResolvers,
  loadFilesSync,
} from 'graphql-tools';
import path from 'path';

// api폴더 내부의 graphql 확장자를 가진 모든 파일을 배열 형태로 가져옴
const allTypes = loadFilesSync(path.join(__dirname, '../api/**/*.graphql'));

// api폴더 내부의 resolvers.* 확장자를 가진 모든 파일을 배열 형태로 가져옴
const allResolvers = loadFilesSync(
  path.join(__dirname, '../api/**/*.resolvers.*')
);

// 스키마 생성
const schema = makeExecutableSchema({
	// 가져온 graphql 타입들을 하나로 합쳐줌
  typeDefs: mergeTypeDefs(allTypes),
  // 가져온 resover 함수들을 하나로 합쳐줌
  resolvers: mergeResolvers(allResolvers),
});

export default schema;
```

`src/config/schema.ts`에 다음과 같은 설정을 작성한다. 각 폴더의 GraphQL파일들과 resolver 함수들을 병합해서 하나의 스키마로 만들어 주는 코드이다.

### apollo server 설정

```tsx
import { ApolloServer, PubSub } from 'apollo-server-express';
import express, { Express } from 'express';
import { createServer, Server } from 'http';

// 좀 전에 생성한 schema
import schema from './config/schema';

// GraphQL 쿼리를 보낼 API URL주소
const GRAPHQL_ENDPOINT = '/graphql';

class App {
  public app: Server;
  private express: Express;
  private apolloServer: ApolloServer;
  private pubsub: PubSub;

  constructor() {
    this.express = express();
    this.app = createServer(this.express);
    this.pubsub = new PubSub();
    this.apolloServer = new ApolloServer({
      schema,
      context: (ctx) => ({ ...ctx, pubsub: this.pubsub }),
      playground: true,
    });
    this.middlewares();
  }

  // server에 등록할 미들웨어들
  private middlewares() {
    // apollo server와 express 연결
    this.apolloServer.applyMiddleware({
      app: this.express,
      path: GRAPHQL_ENDPOINT,
    });
    // subscription을 사용하기 위한 서버 연결
    this.apolloServer.installSubscriptionHandlers(this.app);
  }
}

export default new App().app;
```

그럼 이제 `src/app.ts`에 다음과 같이 Apollo Server를 설정해주면 된다. 여기서 `pubsub`이 생소한 사람들이 많을 것 같다.

`pubsub`은 GraphQL에서 subscription(구독)기능을 사용할 때 사용하는 메서드인데 저 메서드를 통해 구독중인 대상에서 데이터를 넘겨주거나, 구독중인 대상인 경우 데이터를 구독할 수 있다.

중간에 `new ApolloServer`에서 `context`란 프로퍼티에 `pubsub`을 넣어준 이유는 나중에 다른 resolver 함수에서 `pubsub`을 사용하기 위해 넣어줬다.

```tsx
import app from './app';

const PORT = 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
```

그럼 이제 생성한 서버를 실행시켜줘야 한다. `src/index.ts`에 다음과 같이 설정하면 GraphQL 서버를 `4000`번 포트로 실행시킬 수 있다.

## 개발 명령어 설정

```json
{
...,
"scripts": {
    "dev": "nodemon --exec ts-node ./src/index.ts"
},
...
}
```

그럼 node에서 서버를 실행시키기 위해 `package.json`에 다음과 같은 스크립트를 작성해준다.

```bash
npm run dev

# Error: Query root type must be provided.
```

이제 서버를 실행해 보면 정상적으로 실행이 되지 않고 다음과 같이 에러가 뜰 것이다. 당연하다. 아직 **Schema 분기 처리**에서 병합한 `graphql`파일과 `resolvers`파일이 없기 때문에 에러가 발생한다.

## 테스트 쿼리 작성

그렇다면 일단 서버가 정상적으로 설정이 되었는지 확인하기 위해 테스트 쿼리를 작성해보려고 한다.

```graphql
type Hello {
  message: String!
}

type Query {
  hello: Hello
}
```

`src/api/hello/hello.graphql`파일을 생성하고 다음과 같은 쿼리를 작성해보자! `hello`라는 `Query`를 만들고 반환값으로 문자열 형식의 `message`를 넘겨주는 쿼리이다.

```tsx
const resolvers = {
  Query: {
    hello: () => ({ message: 'hello graphql' }),
  },
};

export default resolvers;
```

그러면 `resolvers`파일 역시 만들어 줘야 한다. `src/api/hello/hello.resolvers.ts`파일을 생성하고 다음과 같이 `hello`라는 `Query`가 어떤 `message`를 반환하는지 작성해 줬다.

```bash
npm run dev

# Listening on port 4000
```

자 그럼 다시 서버를 실행시켜보자! 그럼 서버가 정상적으로 실행되는 것을 볼 수 있다.

## GraphQL playground 실행

playground는 Apollo Server에서 기본적으로 제공하는 GraphQL 쿼리를 테스트 해볼 수 있는 환경을 제공한다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5067c96b-5804-46f1-9204-13a17d4cb8bd/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5067c96b-5804-46f1-9204-13a17d4cb8bd/Untitled.png)

그럼 좀전에 만든 `hello`라는 쿼리를 테스트해봤더니 올바르게 `"hello graphql"`이라는 메시지가 온 것을 확인할 수 있다.

## GraphQL 타입 Generator

이제 서버에서 마지막 설정이 남았다. 이번 채팅 서비스는 타입스크립트를 사용해야하기 때문에 각 쿼리나 `resolvers`함수마다 타입을 지정해줘야 한다. 하지만 각 `resolvers`함수마다 타입을 지정해 주면 생산성이 낮아질 수도 있고 사람이다 보니 타입을 지정하다가 실수가 생길 수도 있다.

그렇기 때문에 우리가 작성한 `graphql`파일에 맞춰 자동으로 타입을 생성해주는 도구를 설정해주면 개발하기 조금 더 수월하다.

### 설치

```bash
npm i -D @graphql-codegen/cli @graphql-codegen/add
npm i -D @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
```

다음과 같은 모듈을 설치한다.

- `@graphql-codegen/cli`: graphql-codegen을 실행하기 위한 명령어 모듈
- `@graphql-codegen/add`: codegen에서 외부 타입을 가져올 때 사용
- `@graphql-codegen/typescript`: 타입스크립트에 대한 타입 생성
- `@graphql-codegen/typescript-resolvers`: `resolvers` 함수에 대한 타입 생성

### codegen 설정

```yaml
schema: http://localhost:4000/graphql
generates:
  ./src/types.d.ts:
    plugins:
      - add:
          content: "import { PubSub } from 'graphql-subscriptions';"
      - typescript
      - typescript-resolvers
    config:
      contextType: |
        {
          pubsub: PubSub
        }
```

이제 타입을 어떻게 생성할지에 대해 설정을 해줘야 한다. `/codegen.yml`파일에 기본적으로 가장 위의 `schema`옵션에는 우리가 생성한 서버의 url을 넣어주면 되고 바로 아래에 `generates`라는 옵션을 통해 생성될 타입의 파일 명을 지정해 줄 수 있다. 일단은 `src/types.d.ts`라는 파일로 생성이 되도록 설정했다.

이제 플러그인에 `add`, `typescript`, `typescript-resovlers`를 추가해주면 된다. 그런데 `add`플러그인에서는 외부 `PubSub`타입을 가져오기 위해 설정을 해줘야 한다.

```tsx
 this.apolloServer = new ApolloServer({
      schema,
      context: (ctx) => ({ ...ctx, pubsub: this.pubsub }),
      playground: true,
    });
```

`src/app.ts`에서 설정했던 `pubsub`에 대한 타입을 설정을 해주는 것이다.

### 타입 생성 명령어 설정

```json
{
...,
"scripts": {
    "dev": "nodemon --exec ts-node ./src/index.ts",
		"types": "graphql-codegen"
},
...
}
```

그렇다면 이제 타입을 생성해 보자! 타입을 생성할 때 주의할 점은 서버가 실행되어 있는 상태에서 명령어를 입력해야 한다.

```bash
npm run types

✔ Parse configuration
✔ Generate outputs
```

성공적으로 타입이 생성되는 것을 볼 수 있다.

**참고자료**

[https://chanyeong.com/blog/post/37](https://chanyeong.com/blog/post/37)
