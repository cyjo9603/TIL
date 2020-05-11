# 코드 구조

## 문 (statement)

- 문은 어떤 작업을 수행하는 문법 구조(syntax structure)와 명령어(command)를 의미한다.
- 코드에는 원하는 만큼 문을 작성할 수 있으며, 서로 다른 문은 세미콜론으로 구분한다.
- 코드의 가독성을 높이기 위해 각 문은 서로 다른 줄에 작성하는 것이 일반적이다.

## 세미콜론

- 줄 바꿈이 있다면 세미콜론을 생략할 수 있다.
- 자바스크립트는 줄 바꿈이 있으면 이를 '암시적' 세미콜론 으로 해석하고 이런 동작 방식을 세미콜론 자동 삽입이라 부른다.
- 대부분의 경우, 줄 바꿈은 세미콜론을 의미하지만 항상은 아니다.

```jsx
alert("에러가 발생합니다.")
[1, 2].forEach(alert)

// 브라우저는 다음과 같이 인식함
alert("에러가 발생합니다.")[1, 2].forEach(alert)
```

- 대부분의 경우 자바스크립트는 세미콜론을 자동으로 삽입해 주지만 대괄호`[...]`앞에는 세미콜론이 있다고 가정하지 않는다.

줄 바꿈으로 문을 나눴더라도, 문 사이엔 세미콜론을 넣는것이 좋고 이것을 코드 컨벤션으로 정해 권장하고 있다.

## 주석

- 시간이 흐름에 따라 자바스크립트 프로그램은 더욱 더 복잡해지고 이로 인해 무슨일이 왜 벌어지고 있는지를 설명해주는 주석의 필요성이 요구되었다.
- 주석은 스크립트의 어느 곳에나 작성할 수 있으며, 자바스크립트 엔진은 주석을 무시하기 때문에 주석의 위치는 실행에 영향을 주지 않는다.
- 주석의 경우 `//` 키워드와 `/* */`키워드로 선언할 수 있다.

```jsx
// bad
var active = true;  // is current tab

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  var type = this.type || 'no type';

  return type;
}

```

```jsx
// good
var active = true;

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  var type = this.type || 'no type';

  return type;
}
```

- 한 줄 주석을 사용할 경우 주석 제목 위의 개행에 배치하는 것이 좋다.

```jsx
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
  // ...stuff...
  return element;
}

```

```jsx
// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
  // ...stuff...
  return element;
}
```

- 다음과 같이 여러줄에 주석을 작성 할 때는 `/** ... */`로 주석을 작성하는 것이 좋다.

### 참고

[JAVASCRIPT.INFO - 코드 구조](https://ko.javascript.info/structure)

[airbnb style guide](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)