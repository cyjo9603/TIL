# Mixin

Created By: 찬영 조
Date Created: Feb 19, 2020 12:36 AM
Last Edited By: 찬영 조
Last Updated: Feb 19, 2020 2:55 AM

# Mixin

- Sass의 아주 유용한 기능 중 하나로, extend와 비슷하지만 argument를 받을 수 있다.
- mixin을 선언 할 때는 `@mixin`키워드를 사용하며, 이를 사용 할 때는 `@include`키워드를 사용한다.

```scss
@mixin headline ($color, $size) {
	color: $color;
	font-size: $size;
}

h1 {
	@include headline(green, 12px)
}
```

## 응용

```scss
@mixin media($queryString) {
	@media #{$queryString} {
		@content;
	}
}

.container {
	width: 900px;
	@include media("(max-width: 767px)"){
		width: 100%
	}
}
```

- `#{ }`표현은 특정 문자열을 따로 처리하지 않고 그대로 출력 할 때 사용한다.
- `@content`키워드를 사용하면 나중에 `@include`했을 때, 그 선택자 내부의 내용들이 `@content`부분에 나타난다.