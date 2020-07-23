# Extend

Created By: 찬영 조
Date Created: Feb 19, 2020 12:36 AM
Last Edited By: 찬영 조
Last Updated: Feb 19, 2020 2:49 AM

# 상속

- Sass에서 특정 선택자를 상속 할 때, `@extend`키워드르 사용한다.

```scss
.box {
	border: 1px solid gray;
	padding: 10px;
	display: inline-block;
}

.success-box {
	@extend .box;
	border: 1px solid green;
}
```

## Placeholder

- Placeholder선택자 %를 사용하면 상속은 할 수 있지만 해당 선택자는 컴파일 되지 않는다.

```scss
%box {
	padding: 0.5em;
}

.success-box {
	@extend %box;
}

.error-box {
	@extend %box;
	color: red;
}
```