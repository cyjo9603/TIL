# Nesting

Created By: 찬영 조
Date Created: Feb 19, 2020 12:35 AM
Last Edited By: 찬영 조
Last Updated: Feb 19, 2020 2:41 AM

# 중첩

- Sass의 매우 유용한 기능중 하나로 선언을 중첩시킬 수 있다.

## 기본적인 중첩

### Scss

### css

```scss
.container {
	width: 100%;
	h1 {
		color: red;
	}
}
```

```css
.container {
	width: 100%;
}

.container h1 {
	color: red;
}
```

## 부모선택자

```scss
a {
	color: black;
	&:hover {
		text-decoration: underline;
		color: grey;
	}
	&:visited {
		color: purple;
	}
}
```

- 부모 선택자를 리퍼런스 할 때는 `&`키워드를 사용한다.

## 중첩 벗어나기

```scss
.container {
	.child {
		color: blue;
	}
	@at-root .sibling {
		solor: gray;
	}
}
```

- `sibling`클래스가 `container`클래스 밖에서도 사용되는 것을 알게 되었을땐, `@at-root`지시자를 사용해 중첩에서 벗어날 수 있다.
- 많이 사용하진 않는다.

Sass 코드 중첩을 할 때, 4레벨보다 깊게 들어가면 코드가 복잡해지고 유지보수가 어려워 지므로 깊게 중첩하지 않는 것이 좋다.