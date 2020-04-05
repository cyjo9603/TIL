# 환경 셋팅 ( Typescript )

# 1. Setup

## 1.1 Typescript

    $npm i -D typescript

- Typescript를 설치한다.

## 1.2 express

    $npm i express
    $npm i -D @types/express @types/node

- express와 타입 패키지를 설치한다.

## 1.3 express middleware

    $npm i express-session cookie-parser cors morgan hpp
    $npm i helmet passport passport-local multer axios
    
    $npm i -D @types/express-session @types/cookie-parser @types/cors
    $npm i -D @types/morgan @types/hpp @types/helmet @types/passport
    $npm i -D @types/passport-local @types/multer

- `express-session`은 server에서 세션을 사용할 수 있도록 해주는 패키지이다.
- `cookie-parser`는 server에서 cookie를 사용할 수 있도록 해주는 패키지이다.
- `cors`는 front server와 backend server가 통신할 수 있도록 도와주는 패키지이다.
- `morgan`는 server에 log를 기록해주는 패키지이다.
- `hpp`와 `helmet`은 node와 express의 보안을 담당해 주는 패키지이다.
- `passpost`와 `passport-local`은 로그인 관리를 쉽게 처리할 수 있도록 도와주는 패키지이다.
- `multer`는 이미지를 업로드 할때 사용한다.
- `axios`는 비통기 http통신을 할때 사용한다.

## 1.4 sequelize

    $npm i sequelize sequelize-cli mysql2

- mysql관련 ORM이이다.
- `sequelize`와 sequelize명령을 실행시켜주는 cli를 설치한다.
- `mysql2`는 server와 db를 연결시켜준다.

## 1.5 개발 환경 ( eslint, prettier 제외 )

    $npm i -D dotenv nodemon ts-node

- `dotenv`의 경우 db password나 cookie 암호화 같은 코드에 나타내지 않아야 하는 환경변수를 저장해 불러오는 패키지 이다.
- `nodemone`은 개발단계에서 코드 수정이 발생할 때마다 자동으로 서버를 재시동한다.
- `ts-node`는 typescript파일을 tsc 없이 node환경에서 실행시켜준다.

# 2. setting

## 2.1 dotenv

    DB_PASSWORD=password
    COOKIE_SECRET=cookiesecret

- `.env`파일을 생성하고 환경변수와 값을 지정한다.

## 2.2 tsconfig.json

    {
      "compilerOptions": {
        "strict": true,
        "lib": ["es2015", "es2016", "es2017", "es2018", "es2019", "es2020"],
        "moduleResolution": "node",
        "module": "commonjs",
        "outDir": "./build",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "sourceMap": true,
        "esModuleInterop": true
      }
    }

- tsconfig.json파일을 생성한 뒤 필요한 옵션들을 넣어준다.

## 2.3 sequelize

### 2.3.1 sequelize init

    $npx sequelize init

- sequelize 설정을 초기화 한다.

### 2.3.2 config/config.ts

    import dotenv from 'dotenv';
    
    dotenv.config();
    
    {
      "development": {
        "username": "root",
        "password": process.env.DB_PASSWORD,
        "database": "database-name",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
      },
      "test": {
        "username": "root",
        "password": process.env.DB_PASSWORD,
        "database": "database-name",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
      },
      "production": {
        "username": "root",
        "password": process.env.DB_PASSWORD,
        "database": "database-name",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
      }
    }

- 개발, 테스트, 배포모드에서 사용할 db에 대한 설정을 한다.