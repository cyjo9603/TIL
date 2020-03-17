# React + TS + Next.js Setting

Created By: 찬영 조
Date Created: Mar 17, 2020 8:50 PM
Last Edited By: 찬영 조
Last Updated: Mar 17, 2020 9:52 PM

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