# React + TS + Next.js Setting

Created By: 찬영 조
Date Created: Mar 17, 2020 8:50 PM
Last Edited By: 찬영 조
Last Updated: Mar 25, 2020 4:00 PM

- **INDEX**

# 1. Setup

## 1.1 install next package

    $npm i next
    $npm i -D @types/next @zeit/next-typescript @types/node webpack
    
    # redux options
    $npm i next-redux-saga next-redux-wrapper
    $npm i -D @types/next-redux-saga

# 2. Setting

## 2.1 create .babelrc

    {
        "presets": ["next/babel", "@zeit/next-typescript/babel"]
    }

- `.babelrc` 파일을 생성해 다음 옵션을 추가한다.

## 2.2 create next.config.js

    const withTypescript = require("@zeit/next-typescript");
    
    module.exports = withTypescript(
      webpack: (config) => {
        return config;
      }
    );

- `next.config.js` 파일을 생성해 다음 옵션을 추가한다.

## 2.3 set scripts

    "scripts": {
    	"dev" : "next", // development mode
       "build" : "next build",
       "start" : "next start", // production mode
    }

- `package.json`의 `scripts`에 next 명령어 추가

# 3. Use

- `/pages` 디렉터리에서 next에서 SSR할 파일들을 작성하면 된다.

## 3.1 Layout setting

### 3.1.1 _app.tsx

    import { AppProps } from 'next/app';
    import Head from 'next/head'
    
    interface Props {
    	Component: AppProps['Component'];
    }
    
    const AppName = ({ Component }: IProps) => (
    	<>
    		<Head>
    			*// 이부분에 해더 정보, css파일 삽입*
    		</Head>
    		<AppLayout>
    			<Component />
    		</AppLayout>
    	</>
    )
    
    export default AppName;

- `Component`: 각각 라우팅 될 페이지들을 표시
- `AppLayout`: 공통으로 들어갈 페이지들 (직접 컴포넌트를 만들어야 함)

## 3.2 Redux & Redux saga

### 3.2.1 Redux (_app.tsx)

    import withRedux, { MakeStoreOptions } from 'next-redux-wrapper';
    import { createStore, Store, compose, applyMiddleware } from 'redux';
    import { Provider } from 'react-redux';
    
    interface Props {
    	store: Store;
    }
    
    const AppName = ({store}: Props) => (
    	<>
    		<Provider store={store}>
    		</Provider>
    	</>
    )
    
    const configureStore = (initialState: any, options: MakeStoreOptions) => {
    	const middlewares = [] // 추후에 미들웨어 삽입
    	const enhancer = 
    		process.env.NODE_ENV === 'production'
    			? compose(applyMiddleware(...middlewares))
    			: compose(
    					applyMiddleware(...middlewares),
    					!options.isServer && (window as any).__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    						? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    						: (f: any) => f
    			  );
    	
    	const store = createStore(reducer, initialState, enhancer);
    	return store;
    }
    
    export default withRedux(configureStore)(AppName);

- `Provider`에 `store`를 자식요소로 넣어준다.
- `configureStore`에 Redux 관련 옵션들을 설정한다.
    - `middlewares`배열에는 미들웨어를 추가할 수 있다.
    - `enhancer`에 추가할 미들웨어들을 `applyMiddleware`로 합쳐준다.

        → `development`일때만 `redux dev tools`를 추가한다.

    - 그 후에 `store`를 생성해 주는데 첫번째 인자인 `reducer`는 직접 구현한 `reducer`을 `import`로 가져와야 한다.

## 3.3 next + express

- next는 express와 달리 wild card router기능이 없기 때문에 express와 동시에 구동시키는 방법이 있다.

### 3.3.1  create server.js

    const express express = require('express');
    const next = require('next');
    
    const dev = process.env.NODE_ENV !== 'production';
    const prod = process.env.NODE_ENV === 'production';
    
    const app = next({ dev });
    const handle = app.getRequestHandler();
    
    app.prepare().then(() => {
    	const server = express();
    
    	server.use(morgan('dev'));
    	server.use(express.json());
    	server.use(express.urlencoded({ extended: true }));
    	server.use(cookieParser(process.env.COOKIE_SECRET));
    	server.use(
    		expressSession({
    			resave: false,
    			saveUninitialized: false,
    			secret: process.env.COOKIE_SECRET,
    			cookie: {
    				httpOnly: true,
    				secure: false
    			}
    		})
    	);
    
    	server.get('*', (req, res) => {
    		return handle(req, res);
    	});
    
    	server.listen(3060, () => {
    		console.log('next+express running on port 3060');
    	});
    });

- express server를 만들때와 동일한 방식으로 `next`객체 안에 `express`서버를 구동시킨다.

### 3.3.2 add router

    server.get("/user/:id", (req, res) => { // 주소
      const actualPage = "/user"; // 실제로 보여줄 페이지
      return app.render(req, res, actualPage, { id: req.params.id });
    });

- router를 추가할 때는 다음과 같이 추가할 수 있다.
- `app.render`의 4번째 인자로 값을 넘겨주면 `getInitialProps`를 사용해 컴포넌트에서는 값을 전달받을 수 있다.

### 3.3.3 getInitialProps

    const Main = () => {}
    
    Main.getInitialProps = async (context: NextPageContext) => {
    	context.query.id // server에서 넘겨준 id값을 
    }

- 넥스트에서 제공하는 메소드로 server에서 넘겨준 값을 `content.query.id`로 받아올 수 있다.
- getInitialProps를 사용하기 위해서는 최상위 컴포넌트에서 설정을 해 주어야 한다.

    *설정 방법 : [NEXT SSR](https://www.notion.so/cyjo9603/Next-SSL-cc63f9f8a6af48489b7f0bac65c90387)*