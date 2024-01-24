

## Javascript

## 1.특징

* script언어(이름에 script없어도 script언어일 수 있음)
* 혼자서 실행X
* html을 도와주는 언어
* java랑 아무관련없음
* 2015 ECMA6등장 . 그 이전것들은 레거시, 자바스크립트도 레거시
* 객체: 복잡한 데이터를 간단하게 쓸 수 있게 묶어놓은 형태

| 객체 기반 언어                      | 객체 지향 언어              |
| ----------------------------------- | --------------------------- |
| 객체 지향 언어를 흉내냈다고 보면 됨 | 객체를 제대로 사용하는 언어 |

## 2.사용방법

* 자바 스크립트도 html과 같이 컴파일러(번역기)가 웹브라우저에 내장되어있어서 따로 컴파일러가 필요없음
* css와 똑같이 inline, internal, external방식이 있음

##### **inline방식**

* inline방식은 가급적 쓰지않는게 좋음

##### internal방식

```html
<head>
    <script> /*javascript문법*/
        window.alert("hello world!");
    </script>
</head>
```

##### external방식

* 보편적이고 가장 바람직한 방식

`hmtl`

```html
<head>
    <script src="/JavascriptWork/external.js"></script>
</head>
```

`javascript`

```javascript
window.alert("이것은 외부에서 실행되는 스크립트입니다.")
```

##### 주석

* // : 한줄 주석
* /* ~ */ : 여러줄 주석

---

## 3.문법

##### 변수(Variable): 변할 수 있는 값을 저장할 수 있는 임시 기억(저장)장소


변수 선언

* var, let, consst (var는 거의 안씀)
* 변수 선언을 하면 값을 바꿀때 같은 장소에 저장되므로 공간 낭비 없음
* 변수의 반대 : 상수(똑같이 임시 기억 장소인데, 변경할 수 없는 값)
* 변수 이름은 의미없이 지으면 안됨


변수 표기법

* `.dash-case`(kebab-case)
  * 예시 : the-quick-brown-fox
* `snake_case `(html, css에서 주로사용)
  * 예시: the_quick_brown_fox
* `camelCase `(JS)
  * 예시: theQuickBrownFox
* `PascalCase`(JS)
  * 예시: TheQuickBrownFox

---



Data type

1.String

```javascript
// String
let str1 = "Hello";
let str2 = '1234' ;

//backtick
// " " 차이는 문자열 안에 변수를 불러올 수 있음
let str3 = `hello ${str2}`;
```

---



 2. number

```javascript
 //Number
let num1 = 100;
console.log(num1 + 2);
//자바와 다르게, 실수도 한꺼번에 변수지정 가능
let num2 = 3.14;
let num3 = .2;
console.log(num1 + num2);
```

```javascript
//실수 계산  
num1 = 0.1;
num2 = 0.2;
console.log(num1 + num2);
/* 컴퓨터는 정수계산밖에 못하므로 
3. 0000004 라는 값이 나옴
뒤에는 오차값.  그래서 정리해야함*/
console.log((num1 + num2).toFixed(1));
//그리고 타입은 String이 됨

//String 타입을 number타입으로 바꿔주는 방법
Number((num1+num2).toFixed(1))
```

3.Boolean: true of false

```javascript
//Boolean
let b1 = true;
let b2 = false;
```


4.Undefined: 선언만 되어있고, 값이 할당되지 않은 상태

```javascript
let un1;
```

- 이럴 경우 이 값은 사용하지 못함

5.Null: 물리적으로는 값이 있는데, 비어있는 상태. 특별한 목적으로 만들어진 값

```javascript
let age = null;
//기존 값을 청소해준다고 생각하면됨
```

6.Object: 객체

-객체는 포장지라고 생각하자

```javascript
let user = new Object();
user1.name = "홍길동";
user1.age = "17";
user1.heigt = 167;
//user가 변수를 묶어주는 변수가된것.

```


7.Array

8.Function


데이터 타입을 확인하는 문법

```javascript
//데이터 타입을 알려주는 문법
console.log(typeof(str1), typeof(num1));
```
