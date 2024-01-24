
### 출력 특성(`display`)

* 기본값:`block`, `inline`, `inline-block`
* 왜 기본값이 3개나 될까? 요소에따라 달라지기때문
  - `flex`: 1차원 레이아웃 잡을 때
  - `grid`: 2차원 레이아웃 잡을 때
  - `none`: 존재하지만, 화면에서 안보여짐

### 플렉스(`flex`) : 정렬

* 1차원의 레이아웃을 만드는 개념
* 우리가 자주 사용하는 div(블럭요소)는 수직정렬
* 블럭을 수평정렬 해주기 위해 새로 생겨난 속성
* 참고 블로그:https://studiomeal.com/archives/197
* `flex container `:부모

  * `display`, `flex-flow`, `flex-direction`, `flex-wrap`, `justify-content`, `align-conent`, `align-items`
* `flex items` :자식

  * `order`, `flex`, `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`

---

#### flex container

* `display`

  * `flex` : 수평정렬
  * `inline-flex`: `inline` 요소로 사용, 최대한 줄어드려는 성향
* `flex-direction`: 주축을 설정 / x, y축을 설정하여 수평정렬할지 수직정렬할지 선

  * `row` : 수평정렬/  좌->우
  * `row-reverse` : 우->좌
  * `column` , `column-reverse` : block의 기본이 수직정렬이기 때문에 거의 안씀
* `flex-wrap`

  * `nowrap` : 기본값
  * `wrap` :  여러 줄로 묶음, 도형이 줄바꿈됨
  * `wrap-reverse` : 역방향
* `justify-content` : 주축의 정렬방법을 설정(수평)

  * `flex-start` : 왼쪽정렬, 기본값
  * `flex-end` : 오른쪽정렬
  * `center` : 가운데정렬
* `align-content` : 교차축(수직)의 여러 줄 정렬(수평) 방법

  * `strech` :  시작점으로 정렬
  * `flex-start` : 시작점으로 정렬
  * `flex-end` : 끝점으로 정렬
  * `center` : 가운데 정렬
* `align-items` : 교차축의 한줄 정렬 방법 , 여러 줄 있을 필요 없음

  * `strech` :  시작점으로 정렬
  * `flex-start` : 시작점으로 정렬
  * `flex-end` : 끝점으로 정렬
  * `center` : 가운데 정렬


---

#### flex items

* `order`
  * 기본값: 0
  * 숫자: 숫자가 작을수록 순서빠름
* `flex-grow` : flex item의 증가 너비 비율
  * 기본값: 0
  * 숫자: 증가 비율 줄 수 있음
* `flex-shrink` : flex item의 감소 너비 비율
  * 기본값: 1
  * 숫자: 감소 비율 줄 수 있음
* `flex-basis` : flex item의 공간 배분 전 기본 너비
  * 기본값: auto-요소의 content  너비
  * 단위: px, em, rem 등으로 너비 직접 설정도 가능
  * 내용에 따라 길이가 달라짐
* 0에는 단위를 붙이지 않음


#### 전환(`transition`)


요소의 전 상태와 후 상태의 중간 단계를 자연스럽게 만들어주는 효과

```
transition: 속성명 지속시간 타이밍함수 대기시간;
```

* 여러개의 속성을 적고싶을 때는 "," 이용
* ```
      <style>
          div {
              width: 100px;
              height: 100px;
              background-color: orange;
              transition: width 1s,
                          background-color 2s;
          }
      </style>
  ```
* 단축속성: 하나의 속성에 여러개의 값을 지정
* transition-property : 속성명

  * 기본값: all
  * 그렇지 않으면 속성 이름 지정하면됨 : 전환 효과를 사용할 속성명을 명시
* transition-duration

  * 기본값: 0s
  * 시간: 지속시간(s)을 지정
  * 단축 속성 사용시 필수 속성
* transition-delay

  * 기본값:0s
  * 시간: 대기 시간(s)을 지정


#### 변환(`transform`)

```javascript
transform: 변환함수1 변환함수2 변환함수3
transform: 원근법 이동 크기 회전 기울임
```

* 변환 함수(2D) : `translate`
  * translate(x,y)
  * translateX(x)
  * translateY(y)
  * scale(x,y)
  * rotate(degree)
  * skewX(x)
  * skewY(y)
* 변환 함수(3D) : `matrix3d` (인자가 너무 많음)
  * rotateX(x)
  * roateY(y)
  * perspective(n):관찰 대상에 적용

---

#### 3D관련 속성

* 함수와 속성의 차이: 괄호에 값을 입력하면 모두 함수
  * perspective: 값(px단위 등), 관찰대상의 부모에 적용

    * 변환 함수와는 다름
    * ( ) 없음
  * backface-visibility: visible 또는 hidden
