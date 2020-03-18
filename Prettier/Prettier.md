# Prettier

description: 코딩 스타일 정리 툴

- **INDEX**

# Prettier

- VS Code Extention으로 정해진 규칙에 따라 자동으로 코드 스타일을 정리해 주는 툴
- 여러 규칙들을 쉽게 커스터마이징 할 수 있다.
- 코드를 저장시 정해놓은 규칙에 맞게 자동으로 정렬해서 가독성을 높이고 코드 스타일을 통일할 수 있다.

# 0. my default setting

- **.prettierrc**

        {
          "singleQuote": true,
          "parser": "typescript",
          "semi": true,
          "useTabs": false,
          "tabWidth": 2,
          "trailingComma": "all",
          "printWidth": 120,
          "arrowParens": "always"
        }

# 1. Setup

- VS Code Extention Prettier setup

## 1.1 install packages

    $npm i -D prettier

- npm을 통해 prettier 패키지를 설치한다.

# 2. Setting

## 2.1 .prettierrc

    {
      "singleQuote": true,
      "parser": "typescript",
      "semi": true,
      "useTabs": false,
      "tabWidth": 2,
      "trailingComma": "all",
      "printWidth": 120,
      "arrowParens": "always"
    }

## 2.2 VS Code setting

    "prettier.printWidth": 150,
    "prettier.tabWidth": 2,
    "prettier.trailingComma": "es5",
    "prettier.semi": true,
    "prettier.singleQuote": true,
    "editor.formatOnSave": true,

# 3. Prettier option reference

[Options · Prettier](https://prettier.io/docs/en/options.html)