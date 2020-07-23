# Import

Created By: 찬영 조
Date Created: Feb 19, 2020 12:36 AM
Last Edited By: 찬영 조
Last Updated: Feb 19, 2020 2:44 AM

## import

- import기능은 스타일을 여러 파일들로 나누고, 다른 파일에서 불러와서 사용하는 기능이다.
- 다음과 같이 `@import`키워드르 사용해 특정 scss파일을 불러 올 수 있다.

```scss
@import "layout"
```

## partial

- 만약 .sass파일이나 .scss파일 이름이 _로 시작하면 css파일로 컴파일 되지 않는다.
- html에서 해당 css파일을 불러올 일이 없고, import만 되는 경우에 사용한다.