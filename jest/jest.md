# jest

jest란 facebook에서 개발한 JavaScript 테스팅 프레임워크이다.

lint가 코드 스타일에 rule을 정하는 것이라면, jest는 코드가 올바른 기능을 하는 지 체크할 수 있고 이를 통해 보다 안정적이고 제대로 동작하는 코드를 작성할 수 있다.

# 1. Setup

## 1.1 init -y

```bash
$npm i init -y
```

## 1.2 install packages

```bash
$npm i -D jest
$npm i -D typescript @types/jest ts-jest // typescript 적용 시
```

TypeScript설정도 필요하다면 추가로 관련 패키지들도 설치해줘야 한다.

# 2. Setting

**package.json**

```json
{
	...,
  "script": {
    "test": "jest"
  },
	...
}
```

`package.json`에 jest명령어를 설정해 준다.

```json
{
  "jest": {
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "testRegex": "\\.test\\.ts$",
    "moduleFileExtensions": [
      "ts", "js"
    ],
    "globals": {
      "ts-jest": {
        "enableTsDiagnostics": true
      }
    }
  }
}
```

TypeScript를 사용하는 경우에는 추가적으로 `ts-jest`에 관란 설정을 해줘야 한다.

# 3. Use

```jsx
test('테스트 설명', () => {
	expect('검증 대상')(not?).to???('기대 결과')
})
```

기본적으로 jest는 다음과 같은 패턴으로 테스트 코드를 작성한다. 

`to???`부분에서 사용되는 메서드를 흔히 Test Matcher라고 한다. `expect`호출 후 바로 Matcher를 호출해도 되지만 Matcher가 불만족하는지 테스트할 때는 앞에 `not`을 붙여준다.

## 3.1 test start

```bash
$npm test
```

작성해놓은 테스트 코드를 실행하기 위해서는 아까 `package.json`파일에 작성해놓은 명령어로 실행한다. 기본적으로 jest는 `test.js`로 끝나거나, `test`디렉터리안에 있는 파일들은 모두 테스트 파일로 인식한다. 만약 특정 테스트파일만 실행하고 싶은 경우에는 `npm test <파일명과 경로>`를 입력하면 된다.

## 3.1 Matcher

### 3.1.1 toBe()

객체처럼 참조값을 가지고 있는 값이 아닌 숫자와 문자 같은 원시형 타입의 값을 비교할 때 사용된다.

### 3.1.2 toEqual()

```jsx
test('return object', () => {
  expect({ id: 1 }).toEqual({ id: 1 });
});
```

객체 `{ id: 1`}은 일치 연산자(`===`)를 사용해 비교를 하면 서로 false를 반환한다. 이는 서로 다른 값을 참조하고 있기 때문에 다른 값으로 인식된다.

그렇기 때문에 테스트코드를 작성할때는 참조값을 가지고 있는 값을 비교할 때는 `toBe`가 아닌 `toEqual`을 사용하여 비교한다.

### 3.1.3 toBeTruthy(), toBeFalsy()

JavaScript는 동적 타입 기반 언어이기 때문에 다른 타입들이 `boolean`타입으로 암시적인 형 변환이 발생하는 경우가 많다. (숫자 `1` → `true`, 숫자 `0` → `false`)

```jsx
test('test', () => {
  expect(1).toBeTruthy();
});
```

`toBeTruthy()`는 검증 대상이 `true`로 간주되면 테스트 통과, `toBeFalsy()`는 반대로 `false`로 간주되면 테스트가 통과된다.

### 3.1.4 toHaveLength()

```jsx
test('return object', () => {
  expect([1, 2, 3]).toHaveLength(3);
});
```

`toHaveLength()`는 배열의 길이를 테스트할 때 사용한다.

### 3.1.5 toContain()

```jsx
test('return object', () => {
  expect(['banana', 'melon', 'apple']).toContain('apple');
});
```

`toContain()`은 배열에 특정 원소가 존재하는지를 테스트할 때 사용한다.

### 3.1.6 toMatch()

```jsx
test('return object', () => {
  expect('test@test.com').toMatch(/.*test.com$/);
});
```

문자열의 경우 단순히 `toBe()`를 사용해 문자열이 정확히 일치하는지를 체크하지만, 종종 정규식 기반의 테스트가 필요할 때가 있는데 `toMatch()`를 사용해 비교한다.