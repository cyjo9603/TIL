# Variable

Created By: 찬영 조
Date Created: Feb 19, 2020 12:35 AM
Last Edited By: 찬영 조
Last Updated: Feb 19, 2020 12:43 AM
Tags: variable

# Variable

- Sass는 css에 변수 개념을 도입했다.
- 변수로 사용 가능한 형태는 숫자, 문자열, 폰트, 색상, null, lists와 maps가 있다.
- 변수를 사용 할 때는 `$`문자를 사용한다.

## 1. use

```sass
$primary-color: #333;

body {
	background-color: $primary-color;
}
```

## 2. scope

- Sass의 변수에는 변수 범위가 있다.
- 변수를 특정 selector에서 선언하면해당 selector에서만 접근이 가능하다.

```sass
body {
	$primary-color: #eee;
	background-color: $primary-color;
}

p{
	color: $primary-color; // not use
}
```

- 변수를 선언 할 때, 변수를 global하게 설정할 때는 `!global`키워드를 붙혀준다.
- 추가적으로 `!default` 키워드는 해당 변수가 설정되지 않았거나 값이 `null`일때 값을 설정한다.