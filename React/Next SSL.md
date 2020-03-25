# Next SSL

# 1. setting

## 1.1 getInitialProps ( root component )

- `componentDidMount`보다 먼저 실행되서 가장 최소에 실행되는 메소드이다.
- 최초의 작업 때 렌더링 전에 미리 서버에서 데이터를 가져와 렌더링한다.

### 1.1.1 import

    import { AppProps, AppContext } from 'next/app';

- 메인 컴포넌트의  Props 타입을 정의하기 위해 `AppProps`타입을 가져온다.
- `getInitialProps`의 `context`요소의 타입을 정의하기 위해 `AppContext`타입을 가져온다.

### 1.1.2 setting

    interface Props {
    	Component: AppProps['Component'];
    	pageProps: AppProps['pageProps'];
    }
    
    // root component ( ex: _app.tsx )
    const Main = ({ Component, pageProps }: Props) => (
    	<Component {...pageProps}>
    )
    
    Main.getInitialProps = async (context: AppContext) => {
    	const { ctx, Component } = context;
    	let pageProps = {};
    	if ( Component.getInitialProps ) {
    		pageProps = await Component.getInitialProps(ctx);
    	}
    
    	return { pageProps };
    }

- `await Component.getInitialProps(ctx)`구문은 페이지에 getInitialProps가 있으면 실행시키는 명령어 이다.
- `context`요소에 있는 `Component`는 말그대로 Component, `next`의 페이지들을 의미한다.
- `ctx`는 page들의 `context`를 의미한다.
- `getInitialProps`의 `return`값은 해당 컴포넌트의 인자값으로 들어간다.

# 2. use

## 2.1 getInitialProps ( page component )

### 2.1.1 import

    import { NextPageContext } from 'next';

- `getInitialProps`의 `context`요소의 타입을 정의하기 위해 setting할때와 달리 `NextPageContext` 타입을 가져온다.

### 2.1.2 use getInitialProps

    Child.getInitialProps = async (context: NextPageContext) => {
    		return context.query.id;
    	}
    };

- 컴포넌트에 `return`을 사용해 값을 넘겨준다.