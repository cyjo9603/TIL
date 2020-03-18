# ESLint

description: 코딩 스타일 점검 툴

- **INDEX**

# ESLint

- ESLint는 JS, TS linting 도구, 오픈소스로써 특정한 코딩 스타일 가이드라인을 따르지 않은 패턴을 찾아 사후에 발생할 수 있는 잠재적 문제점을 사전에 발결 할 수 있도록 하기 위해 사용된다.
- JS는 동적인 언어이고 느슨한 타입을 가진 언어이기 때문에 상대적으로 다른언어와 비교했을 때, 개발자가 의도하지 않은 에러를 발생시키기 쉬운 경향이 있다.
- 그러므로 여러 문제점을 사전에 찾기위해 ESLint와 같이 linting 도구를 사용해야 한다.

# 0. my default setting

- **.eslintrc.js**

        module.exports = {
          parser: '@typescript-eslint/parser',
          plugins: ['@typescript-eslint', 'react-hooks'],
          extends: [
            'airbnb-base',
            'plugin:react/recommended',
            'plugin:jsx-a11y/recommended',
            'plugin:import/errors',
            'plugin:import/warnings',
            'plugin:@typescript-eslint/recommended',
            'plugin:prettier/recommended',
          ],
          rules: {
            '@typescript-eslint/explicit-function-return-type': 0,
            'linebreak-style': 0,
            'import/extensions': 0,
          },
          settings: {
            'import/resolver': {
              node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
              },
            },
          },
        };

- **.eslintignore**

        /node_modules
        /next.config.js

# 1. Setup

## 1.1 init project

    $npm init -y # package.json
    $tsc -init # tsconfig.json # typescript global 설치가 되어있어야 함

- 프로젝트 디렉토리를 생성한 후 `package.json`파일과 `tsconfig.json`파일을 생성한다.

## 1.2 install packages

    # Typescript
    $npm i -D typescript 
    
    # ESLint
    $npm -D eslint
    
    # Typescript ESLint packages
    $npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

- npm을 통해 TypeScript와 TypeScript-ESLint관련 package를 설치한다.

## 1.3 React ESLint & Airbnb rule setting

- Airbnb설정은 두가지로 나뉘게 되는데 리액트 관련 규칙이 있는 `eslint-config-airbnb`와 리액트 관련 규칙이 없는 `eslint-config-airbnb-base`가 있다.
- 서버와 같이 react를 사용하지 않는 곳에서는 `eslint-config-airbnb-base`를 설치하는 편이 좀더 가볍다.

### 1.3.1 리액트 관련 규칙

- `eslint-plugin-import` : ES6의 `import`, `export` 구문을 지원, 필수 플러그인
- `eslint-plugin-react` : React 규칙이 들어있는 플러그인
- `eslint-plugin-react-hooks` : React Hooks 규칙이 들어있는 플러그인
- `eslint-plugin-jsx-a11y` : JSX요소의 접근성 규칙에 대한 정적 검사 플러그인

### 1.3.2 eslint-config-airbnb 설치

    $npm info "eslint-config-airbnb@latest" peerDependencies
    $npx install-peerdeps --dev eslint-config-airbnb # npm v5이상

- `npm info "eslint-config-airbnb@latest" peerDependencies`를 입력하면 설치해야하는 패키지 리스트가 출력된다.
- npm버전이 v5이상인 경우 npx명령을 사용해 자동으로 플러그인 및 설정들을 설치할 수 있다.

### 1.3.3 eslint-config-airbnb-base 설치

    $npm install -D eslint-plugin-react eslint-plugin-react-hooks
    $npm install -D eslint-plugin-jsx-a11y eslint-plugin-import

## 1.4 Prettier 연동

### 1.4.1 setup

    $npm i -D prettier eslint-config-prettier eslint-plugin-prettier

- npm을 통해 prettier와 ESLint와의 출동을 피하기 위한 패키지를 설치한다.
- eslint-plugin-prettier : 포맷관련 오류가 두 번 출력된다. (eslint + prettier)
- eslint-config-prettier : eslint에서 포맷 관련 오류가 출력되지 않는다.
- plugin 사용만으로는 eslint formatting rules와 prettier rules가 충돌함으로 함께 사용하는 것이 좋다.

### 1.4.2 setting

    "extends" : ["plugin:prettier/recommended"],

- `.eslintrc`파일에 다음 속성을 추가한다.

## 1.5 VS Code ESLint setup

- VS Code Extensions ESLint setup

### 1.5.1 VS Code setting

    "eslint.validate": ["typescript", "typescriptreact"]

- VS Code의 setting.json파일에 다음 속성을 추가한다.

# 2. Rules

[rules code](https://www.notion.so/d7c722d4dd254012be81d2595f2d0a2d)

# 3. Error

## 3.1 Cannot find module 'eslint-plugin-react'

- 프로젝트의 root폴더에 .eslintrc파일이 아니라 backend, frontend같은 폴더로 프로젝트가 나뉘어져 있을 경우 발생

### solution

    "eslint.workingDirectories": ["./frontend", "./backend"]

- VS Code의 setting.json파일에서 작업 디렉토리를 설정해준다.