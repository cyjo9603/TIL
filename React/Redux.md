# Redux

- **INDEX**

# 0. Concept

## 0.1 Structure

### 0.1.1 기본 개념

    {
    	type: "ADD_TODO",
    	data: {
    		id: 0,
    		text: "redux"
    	}
    }

- 액션 객체는 type필드를 필수적으로 가지고 있어야 하고 그 외에 값들은 개발자 마음대로 넣어줄 수 있다.

    interface IAction {
    	type: typeof ACTION_NAME; // action type값을 상수로 미리 선언해 놓은 경우
    	data: {
    		id: number;
    		text: "redux" | "mobX";
    	}
    }

- TypeScript의 경우 Action 객체의 interface도 생성해 줘야 한다.

### 0.1.2 Action Creater

- Action creater는 액션을 만드는 함수이다.
- 단순히 인자값을 받아와 액션 객체 형태로 만들어 준다.

    const addData = (data: {id: number, text: "redux" | "mobX"}):IAction => {
    	return {
    		type: ACTION_NAME,
    		data
    	};
    }

### 0.1.3 Reducer

- reducer는 변화를 일으키는 함수로 두가지의 인자를 받아온다.

    const reducer = (state: IInitailState, action: ReducerAction) => {
    	switch (action.type) {
    		case ACTION_NAME: {
    			return
    		}
    	}
    }

- 첫 번째 인자는 state로 초기 state의 interface를 만들어 적용시킨다.
- 두 번째 인자는 action으로 action들의 값들을 타입으로 만들어 적용시킨다.
    - `type ReducerAction = ACTION_NAME | ...` 의 형식으로 구현한다.

### 0.1.4 Store

- Redux에서는 한 application 당 하나의 store를 만들게 된다.
- store안에는 현재의 application의 state, reducer가 들어가있고, 추가적으로 몇가지 내장 함수들이 들어있다.

### 0.1.5 dispatch

- dispatch는 store의 내장함수 중 하나로 action을 발생 시키는 것이라고 이해하면 편하다.
- dispatch함수에 action을 파라미터로 전달해 호출하면 스토어는 reducer 함수를 실행시켜서 해당 action을 처리하는 로직이 있다면 로직을 실행시켜 준다.

### 0.1.6 subscribe

- subscribe 또한 store의 내장함수 중 하나로, 함수 형태의 값을 파라미터로 받아온다.
- subscribe함수에 특정 함수를 전달해주면, action이 dispatch 되었을 때 마다 전달해준 함수가 호출된다.

## 0.2 Redux의 3가지 규칙

### 2.1.1 하나의 Application안에는 하나의 Store가 있다.

- 하나의 Application에선 단 하나의 Store만을 만들어 사용한다.
- 여러개의 Store를 사용하는 것은 가능하기는 하지만 권장되지는 않는다.
- 특정 업데이트가 너무 빈번하게 일어나거나, Application의 특정 부분을 완전히 분리시키게 될 때 여러개의 Store를 만들 수도 있다.
- 하지만 그렇게 하면, 개발 도구를 활용하지 못하게 된다.

### 2.1.2 상태는 읽기전용 이다.

- React에서 state를 업데이트 해야 할 때 `setState`를 사용하고, 배열을 업데이트 해야 할 때는 배열 자체에 `push`를 직접 하지 않고, `concat`과 같은 함수를 사용하여 기존의 배열은 수정하지 않고 새로운 배열을 만들어서 교체하는 방식으로 업데이트를 한다.
- 깊은 구조로 되어있는 객체를 업데이트 할 때도 마찬가지로, 기존의 객체는 건들이지 않고 `Object.assign`이나 spread 연산자(`...`)를 사용해 업데이트 한다.
- Redux도 마찬가지로 기존의 상태는 건들이지 않고 새로운 상태를 생성하여 업데이트 하는 방식으로 하면 나중에 개발자 도구를 통해 상태를 어느정도 조정할 수 있다.

- Redux에서 불변성을 유지해야 하는 이유는 내부적으로 데이터가 변경 되는 것을 감지하기 위하여 shallow equality 검사를 하기 때문이다.
- 이를 통해 객체의 변화를 감지 할 때 객체의 깊숙한 안쪽까지 비교를 하는 것이 아니라 겉햝기 식으로 비교를 해 좋은 성능을 유지 할 수 있다.
- 불변성을 유지하며 상태를 관리하는 것을 도와주는 라이브러리로는 immutable.js 혹은 Immer.js가 있다.

### 2.1.3 변화를 일으키는 함수, Reducer는 순수한 함수여야 한다.

- Reducer 함수는 이전 `state`와 `action` 객체를 파라미터로 받는다.
- 이전의 상태는 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어 반환한다.
- 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야 한다.

*동일한 인풋이라면 동일한 아웃풋이 있어야 한다. 그러나 일부 로직들 중 실행 할 때마다 다른 결과값이 나타날 수 있다. `new Date()`나 `Math.random()`, 네트워크 요청 등이 있는데 이러한 작업들은 결코 순수하지 않은 작업이므로, Reducer 함수의 바깥에서 처리해줘야 한다. 이런 것을 하기 위해 Redux Middleware를 사용하곤 한다.*

# 1. Setup

## 1.1 package setup

    $npm i redux react-redux
    $npm i -D @types/react-redux

- React project에서 Redux를 사용하려면 다음 라이브러리들이 필요하다.
    - **redux** : Redux module
    - **react-redux** : React component에서 Redux를 사용하기 위한 유용한 도구들이 들어가 있다.
    - **redux-actions** : 필수는 아니지만 알아두면 유용한 라이브러리 이다.
- TypeScript에서는 `@types/react-redux`를 추가로 설치한다.

# 2. reducer setting

- reducer의 폴더 구조는 `/src/reducer/childReducer` 구조로 생성한다.
- 여러개로 나눠진 reducer들을 sub reducer라고 하고, 하나로 합쳐진 reducer를 root reducer라고 한다.

## 2.1 sub reducer

### 2.1.1 initialState

    export interface InitialState{
    	id: string;
    	name: string;
    }
    
    const initialState: InitialState = {
    	id: '';
    	name: '';
    }

- store에 저장할 `initialState`의 인터페이스와 객체를 작성한다.

### 2.1.2 Action

    export const UPDATE_NAME = 'UPDATE_NAME' as const;

- `reducer`에 사용할 Action을 작성한다.

### 2.1.3 Action Creater

    export interface UpdateName {
    	type: typeof UPDATE_NAME;
    	name: string;
    }
    
    export updateNameAction = (name: string): UpdateName => ({
    	type: UPDATE_NAME,
    	name
    })

- Action Creater와 인터페이스를 작성한다.
- action creater 함수를 정의할 땐 위와 같이 앞에 export를 선언해야 한다.
- 여기서 만든 함수들은 나중에 component에 redux를 연동하고 불러와서 사용하게 된다.

### 2.1.4 Action type

    type ReducerAction = UpdateName | DeleteName;

- Reducer의 `action`에 대한 타입을 Action Creater들의 인터페이스들로 정의한다.

### 2.1.5 Reducer

    const reducer = (state: InitialState = initialState, action: ReducerAction) => {
    	switch (action.type) {
    		case UPDATE_NAME: {
    			return {
    				...state
    			}
    		}
    	
    		default: 
    			return {
    				...state
    		}
    	}
    }
    
    export default reducer;

- `state`인자는 `initialState`로 `action`인자는 `ReducerAction`타입으로 받는 리듀서 함수를 생성한다.
- `switch`문의 `action.type`의 값에 따라 맞는 Action이 실행된다.
- `export default`로 리듀서 함수를 지정한다.

## 2.2 root reducer

### 2.2.1 import

    import { combineReducers } from 'redux';
    import firstReducer, { FirstInitailState } from './first';
    import secondReducer, { SecondInitailState } from './second';

- `combineReducers`: sub reducer들을 하나의 root reducer로 병합하는 역할을 수행한다.
- 나머지 병합할 리듀서 함수들과 각각 리듀서의 `initialState`의 인터페이스를 가져온다.

### 2.2.2 root state interface

    export interface RootState {
    	firstReducer: FirstInitailState;
    	secondReducer: SecondInitailState;
    }

- root state의 인터페이스를 작성한다.

### 2.2.3 root reducer

    const rootReducer = combineReducers({
    	firstReducer,
    	secondReducer
    })
    
    export default rootReducer;

- 가져온 두개의 child reducer를 병합해 root reducer를 생성한다.
- `export default`는 `rootReducer`로 지정한다.

## 2.3 Store

- 어디서나 redux를 사용하기 위해 redux store를 자식 요소로 넣어주는 `Provider`를 설정한다.
- Provider는 Application의 최상단 JSX요소로 작성한다.

### 2.3.1 import

    import { createStore } from 'redux';
    import { Provider } from 'react-redux';
    import reducer from '../reducer';

- store를 생성하기 위한 createStore와 앞서 구현했던 rootReducer를 불러온다.
- store를 자식 요소로 보내주기 위한 Provider요소를 불러온다.

### 2.3.2 create configureSt

    const store = createStore(reducer);

- `createStore`함수를 이용해 redux store를 생성한다.

### 2.3.3 Provider

    <Provider store={store}>
    	<App />
    </Provider>

- 루트 요소를 `Provider`요소로 감싸고 자식 요소로 `store`를 넣어준다.
- 이제 모든 리액트 컴포넌트에서 redux를 사용할 수 있다.

# 3. Use store

## 3.1 useSelector

### 3.1.1 import

    import { useSelector } from 'react-redux';
    import { RootState } from '../reducers';

- `store`에서 state값을 가져오기 위한 `useSelector`를 불러온다.
- `state`값의 타입을 정의하기 위한 root state의 인터페이스를 불러온다.

### 3.1.2 useSelector

    const { id } = useSelector((state: RootState) => state.firstReducer);
    const { name } = useSelector((state: RootState) => state.firstReducer);

- 컴포넌트 안에서 `useSelector`를 사용해 상태값을 가져온다.
- 상태값을 한번에 여러개를 가져와도 되지만 하나의 상태값만 바뀌어도 모든 상태값을 다 가져와야 하기 때문에 따로따로 선언해 주는것이 좋다.

## 3.2 useDispatch

### 3.2.1 create dispatch

    import { useDispatch } from 'react-redux';
    
    const Component = () => {
    	const dispatch = useDispatch();
    }

- `dispatch`함수를 생성하기 위한 `useDispatch`를 불러온다.
- 컴포넌트 안에서 `useDispatch`를 사용해 Action을 호출할 수 있는 `dispatch`함수를 가져온다.

### 3.2.2 use dispatch

    dispatch(actionCreater());

- `dispatch`함수 안에 미리 생성해논 `actioncreater`를 인자로 넣어 실행한다.

- React project에서 Redux를 사용하려면 다음 라이브러리들이 필요하다.
    - **redux** : Redux module
    - **react-redux** : React component에서 Redux를 사용하기 위한 유용한 도구들이 들어가 있다.
    - **redux-actions** : 필수는 아니지만 알아두면 유용한 라이브러리 이다.
- TypeScript에서는 `@types/react-redux`를 추가로 설치한다.