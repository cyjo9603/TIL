# Function

Created By: 찬영 조
Date Created: Feb 19, 2020 12:36 AM
Last Edited By: 찬영 조
Last Updated: Feb 19, 2020 3:00 AM

# Function

- Built-in Function과 달리 이 부분은 임의 함수이다.
- Function은 mixin과도 비슷한데, 차이점은 mixin은 style markup을 반환하지만 function은 `@return`키워드를 통해 값을 반환한다.
- funtion을 선언 할 때는 `@function`키워드를 사용한다.

```scss
@function calc-percent($target, $container) {
	@return ($target / $container) * 100%;
}

@function cp($target, $container) {
	@return calc-percent($target, $container);
}

.my-module {
	width: calc-percent(650px, 1000px);
}
```

자주 사용 할 것 같은 함수는 단축함수를 만들어 사용하면 좋다.