# flex layout

# 1. layout 속성

## 1.1 display

- 플렉서블 박스로 작동시키기 위한 기본 설정
- `display: flex` : 박스를 블록 수준의 플렉서블 박스로 작동하게 함
- `display: inline-flex` : 박스를 인라인 수준의 플렉서블 박스로 작동하게 함

[브라우저 접두사](https://www.notion.so/a95be578959e4264a1ef69685c5b0a7c)

## 1.2 flex-direction

- `flex-direction` : 정령 방향 설정
    - `row` : 박스를 가로 방향으로 배치 (기본값)
    - `row-reverse` : 박스를 가로 방향으로 배치하되 역방향으로 배치
    - `column` : 박스를 세로 방향으로 배치
    - `column-reverse` : 박스를 세로 방향으로 배치하되 역방향으로 배치

## 1.3 flex-wrap

- `flex-wrap` : flex item을 여러 줄로 배치
    - `nowrap` @: 박스를 한 줄로 배치 (기본값)
    - `wrap` : 박스를 여러 줄로 배치
    - `wrap-reverse` : 박스를 여러 줄로 배치하되 역방향으로 배치

## 1.4 flex-direction과 flex-wrap 한번에 설정

- 첫 번째 속성값은 flex-direction 속성을 작성하고 두 번째 속성값은 flex-wrap 속성을 작성
- `flex-flow : [flex-direction] [flex-wrap]`

# 2. content 속성

## 2.1 justify-content

- `justify-content` : 정렬 방향으로 flex item을 다양하게 배치
    - `flex-start` : 박스를 주축의 시작점으로 배치 (기본값)
    - `flex-end` : 박스를 주축의 끝점으로 배치
    - `center` : 박스를 중앙으로 배치
    - `space-between` : 플렉서블 박스에 빈 공간이 있을 때 첫 번째 박스와 마지막 박스는 양쪽 끝으로 붙이고, 나머지 박스는 동일한 간격으로 정렬
    - `space-around` : 플렉서블 박스에 빈 공간이 있을 때 양쪽 끝에 있는 박스의 양 옆에도 공간을 둔채 자동 정렬
    - `space-evenly` : 플렉서블 박스에 빈 공간이 있을 때 양쪽 끝에 있는 박스의 양 옆과 모든 간격을 동일한 간격으로 정렬

## 2.2 align-items

- `align-items` : 정렬방향이 아닌 교차축 방향으로 flex item를 다양하게 배치
    - `stretch` : 박스를 확장해서 배치 (기본값)
    - `flex-start` : 박스를 교차축의 시작점에 배치
    - `flex-end` : 박스를 교차축의 끝점에 배치
    - `center` : 박스를 교차축의 중앙에 배치
    - `baseline` : 박스를 시작점에 배치되는 박스의 글자 베이스라인에 맞춰 배치

# 3. item 속성

## 3.1 align-self

- `align-self` : 교차축 방향으로 flex item 개별적으로 배치
    - `auto` : 플렉서블 박스의 align-items값을 상속받음
    - 나머지 속성은 align-items와 속성이 같음

## 3.2 align-content

- align-content : 교차축 방향으로 박스를 배치하는 속성의 확장판, 박스가 여러 줄일 때 사용
    - 모든 속성값이 justify-content 속성값과 같음

## 3.3 order

- `order` : 입력된 정숫값에 따라 박스가 배치 (낮을수록 앞쪽에 배치)
- 음숫값을 입력하면 기본값인 0으로 설정

## 3.4 flex

- flex item의 크기 조정
    - flex-grow : 플렉서블 박스에 여백이 있을 때 flex item의 크기를 늘일 수 있는 속성
    - flex-shrink : 플렉서블 박스안의 flex item 크기가 넘칠 경우 크기를 줄일 수 있는 속성
    - flex-basis : flex item의 기본 크기를 설정하기 위한 속성, width 속성에서 사용 가능한 모든 값을 사용할 수 있을

- `flex : [flex-grow] [flex-shrink] [flex-basis]` : 한번에 설정시 명령어