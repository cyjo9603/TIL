# Redux saga

- **INDEX**

# 0. concept

- redux-saga는 React/Redux Application의 side effect, 예를 들면 데이터 fetching이나 브러우저 캐시에 접근하는 순수하지 않은 비동기 동작들을, 더 쉽고 좋게 만드는 것을 목적으로 한 라이브러리 이다.
- 특정 action이 dispatch되었을 때 정해진 로직에 따라 다른 action을 dispatch시키는 규칙을 작성하여 비동기 작업 처리한다.

## 0.1 use case

- 기존 요청을 취소 처리해야 할 때 ( 불필요한 중복 요청 방지 )
- 특정 action이 발생했을 때 다른 action을 발생시키거나, API요청 등 리덕스와 관계없는 코드를 실행했을 때
- 웹 소켓을 사용할 때
- API 요청 실패 시 재요청해야 할 때

# 1. setup

## 1.1 setup package

    $npm i redux-saga

- npm을 사용해 redux-saga 패키지를 설치한다.

# 2. Setting

## 2.1 create saga middleware

- Saga를 Redux Store에 연결하기 위해서는 미들웨어를 사용해야 한다.
- 그러기 위해 필요한 것이 `createSagaMiddleware`이다.

### 2.1.1 redux middleware에 createSagaMiddleware 연결

    import { createStore, applyMiddleware } from 'redux';
    import createSagaMiddleware from 'redux-saga';
    
    import reducer from './reducer';
    import rootSaga from './sagas/index';
    
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    
    sagaMiddleware.run(rootSaga);

- `createSagaMiddleware`를 사용해 `sagaMiddleware`를 생성한다.
- 생성한 미들웨어를 `applyMiddleware`함수의 인자로 넣어주고 스토어를 생성한다.
- 마지막으로 saga를 실행한다.

# 3. create saga

## 3.1 create sub saga item

### 3.1.1 import

    import axios from 'axios';
    import { takeLatest, put, call } from 'redux-saga/effects';

- `axios`는 비동기 통신을 하기위해 필요한 http통신 라이브러리 이다.
- saga을 동작하기 위해 필요한 모듈들을 호출한다.

### 3.1.2 API

    function saveUserAPI(data: { userId: number; userName: string}) {
    	return axios.post('/user/signup', data);
    }

- 비동기 처리를 수행하기 위한 API함수를 구현한다.
- 따로 `async` `await`을 구현하지 않아도 saga에서 API를 호출할 때 비동기 처리를 도와준다.

### 3.1.3 saga 기능 동작 함수

    function* saveUser(action: saveUserRequest) {
    	try{
    		const result = yield call(saveUserAPI, action.data);
    		yield put(saveUserSuccess(result.data));
    	} catch (e) {
    		yield put(saveUserFailure(e));
    	}
    }

- 이제 비동기 함수를 호출하고 액션을 실행시켜주는 함수를 구현해야 한다.
- 함수는 제너레이터 함수로 구현하며 중간중간 비동기 처리를 위해 `yield` 키워드를 사용한다.
- API함수를 호출할 때는 saga effect인 `call`함수를 사용하며 첫번째 인자로 API 함수, 두번째 인자로 API함수의 파라미터를 넣어준다.
- 비동기 통신으로 값을 얻으면 미리 생성해 놓은 Action Creater를 사용해 `dispatch`를 사용하듯이 `put`함수를 사용해 Action을 호출한다.
- 비동기 통신을 처리하는 과정에서는 많은 에러가 발생하므로 `try catch`문을 이용해 에러를 처리한다.

### 3.1.4 action 관찰 함수

    function* watchSaveUser() {
    	yield takeLatest(SAVE_USER_REQUEST, saveUser);
    }
    
    export default watchSaveUser;

- 이 함수는 첫번째 인자로 넣어준 Action을 관찰하고 있다가 Action이 실행되는 것을 감지하여 두번째 인자로 넣어준 함수를 실행시킨다.
- 함수를 구현할 때 제너레이터 함수로 구현한다.
- 예제로는 `takeLatest`를 사용했지만 다른 saga effect를 사용해도 무방하다.
- 마지막으로 이 관찰함수를 `export default`에 지정한다.

### 3.1.5 sub saga cycle

- 이 saga는 처음에 Action이 호출되는 것을 감지하면 watch함수에서 두번째 인자로 넣어준 함수를 실행한다.
- 그러면 실행된 함수에서 비동기 통신을 위한 함수를 호출하고 Response로 받아온 값을 저장해 미리 생성해놓은 다른 Action을 호출한다.
- 관찰 함수가 하나인 경우는 바로 rootSaga에 넣어주면 되지만 여러개인 경우 하나의 saga로 묶어줘야 한다.

## 3.2 link sub saga

- sub saga가 여러개인 경우 하나의 saga로 연결해 줘야 한다.

### 3.2.1 import

    import { all, fork } from 'redux-saga/effects';
    
    import watchSaveUser from './saveUser';
    import watchRemoveUser from './removeUser';

- 필요한 saga effect와 연결할 saga들을 호출한다.

### 3.2.2 link saga

    export default function* userSaga() {
    	yield all([
    		fork(watchSaveUser),
    		fork(watchRemoveUser),
    	]);
    }

- sub saga를 연결해주는 saga함수 역시  제너레이터 함수로 작성한다.
- `fork`로 연결할 saga를 감싸주는데 `fork`는 결합된 saga를 만들 때 사용된다.
- `all`함수를 사용해 `fork`로 감싸진 saga들을 병행적으로 동시에 실행하고 전부 resolve될때까지 기다린다.

## 3.3 Root saga 생성

- 마지막으로 연결된 sub saga들을 하나의 root saga로 합치면 saga 생성이 끝난다.

### 3.3.1 root saga

    import { all, call } from 'redux-saga/effects';
    
    import user from './user';
    import post from './post';
    
    export default function* rootSaga() {
    	yield all([call(user), call(post)]);
    }

- 필요한 saga effect와 연결할 saga들과 root saga에 필요한 sub saga들을 불러온다.
- root saga함수 역시 제너레이터 함수로 생성하며 `call`함수로 감싸준 sub saga들을 `all`함수에 배열의 형태로 묶어준다.
- 만들어진 root saga를 `export default`로 설정하고 처음 saga middleware를 만들었던 함수에 root saga를 넣어준다.

# 4. Use

## 4.1 Saga Effect

### 4.1.1 delay

    delay(1000);

- 설정된 시간 이후에 resolve하는 `Promise`객체를 반환한다.

### 4.1.2 put

    put(saveUserSuccess());

- 특정 액션을 `dispatch`하도록 하며 사용 방법은 `dispatch`함수와 동일하다.

### 4.1.3 take

- 해당 action이 `dispatch`되면 제러레이터를 next 하는 effect

### 4.1.4 takeEvery

    takeLatest(SAVE_USER_REQUEST, saveUser)

- 인자로 관찰할 action과 제너레이터 함수를 넣어준다.
- 관찰된 action이 `dispatch`되면 인자로 넣어준 제너레이터 함수가 실행된다.

### 4.1.5 takeLatest

    takeLatest(SAVE_USER_REQUEST, saveUser)

- `takeEvery`와 동일하지만 동시에 여러번 action이 `dispatch`되면 마지막 `dispath`된 action만 받는다.
- 이전 요청이 끝나지 않은게 있다면 이전 요청을 취소한다.

### 4.1.6 fork

    [fork(watchSaveUser), fork(watchRemoveUser)]

- saga들을 결합할 때 사용하고 인자는 saga의 관찰 함수를 넣어준다.
- `fork`로 결합한 함수들은 `all`로 묶어 처리한다.
- 비동기 함수를 호출할 때도 사용된다. ( ↔ `call` 함수와 반대된다.)

### 4.1.7 call

    call(saveUserAPI, data);

- 함수의 첫 번째 파라미터는 함수, 나무지 파라미터는 해당 함수에 넣을 인수이다.
- 동기적인 호출함수로 request를 보내면 response가 올때까지 기다린다.

### 4.1.8 all

    all([call(user), call(post)]);

- all함수를 사용해서 제너레이터 함수를 배열의 형태로 인자로 넣어주면, 제너레이터 함수들이 병행적으로 동시에 실행되고 전부 resolve될때까지 기다린다.
- Promise.all과 비슷하다.
- 여러 함수를 watch하고 싶을 때 사용한다.

### 4.1.9 cancel

    const requestTask = yield fork(saveUser);
    cancel(requestTask);

- fork나 call로 호출한 함수를 cancel 이펙트로 취소할 수 있다.

### 4.1.10 throttle

    throttle(1000, SAVE_USER, saveUser);

- throttle함수를 사용하면 관찰하고 있는 action에 대하여 설정해놓은 시간동안 인자로 넣어준 제너레이터 함수를 실행하지 않는다.
- 서버에 부담을 줄이거나 특정한 시간동안 제한을 걸어야 하는 호출에 사용된다.
- 첫번째 인자로는 설정할 시간, 두번째 인자로는 액션, 세번째 인자로는 호출할 제너레이터 함수를 넣어준다.

### 4.1.11 saga effect api reference

[8. API Reference](https://redux-saga.js.org/docs/api/)