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

##### (1)변수(Variable): 변할 수 있는 값을 저장할 수 있는 임시 기억(저장)장소

변수 선언

* var, let, consst (var는 거의 안씀)
* 변수 선언을 하면 값을 바꿀때 같은 장소에 저장되므로 공간 낭비 없음
* 변수의 반대 : 상수(똑같이 임시 기억 장소인데, 변경할 수 없는 값)
* 변수 이름은 의미없이 지으면 안됨
* 변수에 초기값을 넣는 것: 초기화(initialization)

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

##### (2)Data type

1.String

```javascript
// String
let str1 = "Hello";
let str2 = '1234' ;

//backtick
// " " 차이는 문자열 안에 변수를 불러올 수 있음
let str3 = `hello ${str2}`;
```

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
//선언 방법 1
let user = new Object();
user1.name = "홍길동";
user1.age = "17";
user1.heigt = 167;
//user가 변수를 묶어주는 변수가된것.

//선언 방법2
let user2 = {
name: "임꺽정",
age: "20",
height: 187
}

```

-출력하면 묶여있는 객체가 보임

![1706143697910](image/JS_TIL/1706143697910.png)

-묶여있는 객체를 꺼내오는법

```javascript
//묶여있는 객체에 접근해서 꺼내오는 방법1
console.log(user1.name, user1.age, user1.height);
  
//방법2
console.log(user1["name"], user1["age"]);
```

-객체 안에 다른 객체 불러오기가 가능

```javascript
let userA = {
	name: "홍길동",
 	age : 30
        }

let userB = {
          name: "임꺽정",
          age : 32,
          friend : userA //다른 객체 불러올 수 이음
        }

```

-userB를통해 userA 불러오는법

```javascript
console.log(userB.friend.name);
console.log(userB["friend"].name);
console.log(userB["friend"]["name"]);
```

7.Array

```javascript
//Array: 배열, 여러개를 쓰기좋게 하나로 묶어조는것
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "shinemusket";
  
let fruits = new Array("apple","banana","shinemusket");
//객체와의 차이 
//객체는 키: 값 형태로 값을 정하는데, 배열은 바로 값을 넣음.
```

-출력될 때 : 객체와 다르게 [ ] 로 묶여나옴

![1706147034502](image/JS_TIL/1706147034502.png)

```javascript
//값을 꺼낼 때는 index를 써서 꺼내야함. 순서데이터=index,순서는 0부터
console.log(fruits[0],fruits[1],fruits[2]);
//키가 없기 때문에 "."을 쓰지못하고 []를 써서 접근해야함

```

8.Function

데이터 타입을 확인하는 문법

```javascript
//데이터 타입을 알려주는 문법
console.log(typeof(str1), typeof(num1));
```

---

### Operator

javascript 관련 공식 사이트

https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_operators

**연산자의 우선순위**

연산자가 섞였을 때,

산술연산자 > 비교연산자 > 논리연산자 > 할당연산자

괄호를 사용해서 우선 연산자를 잘 선택하자

#### 1.산술연산자

```javascript
//산술 연산자(++, --)
let num = 10;
  
num++; // num=num+1
console.log(num);

//let num1 = ++num;
let num1 = num++;
console.log(num1, num);  
/*다른 변수에 넣을 때는, 후위증가와 전위증가 차이가 있기 때문에 조심해야함.
후위증가는 let num1에 값을 먼저 넣고, 증가가 되기 때문.
그래서  num을 찍으면 증가된값이 나오긴 함.*/

```

#### 2.비교연산자

```javascript
let num1 = 10;
let num2 ="10";

console.log(num1 == num2);
//true. 타입이 아니라, 값자체를 비교하는 것이므로

console.log(num1 === num2);
//false. 타입을 비교해주는 연산자이므로.

console.log(num1 !== num2);
//false. 값 자체가 같지 않다고 썼으므로.

console.log(num1 !=== num2);
//true. 타입이 같지 않냐고 물어봤으므로.
```

```javascript
let num1 = 0;
let num2 = false;
console.log(num1 == num2);
//true. 0은 부정의 의미가 있으므로

console.log(num1 === num2);
//false. 타입은 다르므로.
```

#### 3.논리연산자

0은 false와 같다.

false와 같은지 물어보면, true 값이 나온다.

```javascript
let num = 0;
let num1 = false;

console.log(num && num1);
//true . 0은, false랑 똑같음 

```

숫자를 넣었을때 &&와 ||의 차이

```javascript
let num1 = 0;
let num2 = 1;
let num3 = 2;

console.log(num1 && num2 && num3);
//0. 0은 false이므로.

console.log(num2 && num3);
//2. true값이 없으니까 그냥 마지막까지 검사한 값이 나옴.

console.log(num1 || num2 || num3);
//1. 제일먼저 만난 true값.
```

not연산자

피연산자를 `true`로 변환할 수 있으면 `false`를 반환합니다. 그 외에는 `true`를 반환

```javascript
console.log(!0);
//true.

console.log(!!0);
//false

console.log(!1);
//false
```

#### 4.할당연산자(=, +=, -=, /=, ...)

```javascript
a = 10;
a = 5;
a = 7;
console.log(a);

b = 10;
b += 5; // b = b + 5
b += 7;// b = b + 7
console.log(b);

```

---

### Control statement(제어문)

### 1.조건문(if, switch)

#### -if

** 참고로 한 줄일 때는  { }생략가능

```javascript
if(조건) {
	실행코드-> 조건이 무조건 참이라는 전제
}

//거짓인 경우도 적으려면
if(조건) {
	실행코드
}else {
	실행코드
}

//다중 if문
if(조건) {
	실행코드
}else if {
	실행코드
}else if {
	실행코드
}[else {

}]
//더이상 조건이 없을 때, else를 써도되고 안써도됨.

```

#### -switch

```javascript
switch(수식, 변수) { //조건문이 아님. 크거나작다를 못하고 무조건 같을 때만 사용가능
	case 값:
	실행할 코드;
	break;

	case 값2:
	실행할 코드;
	break;

	[default:
	실행할 코드;] //->생략가능
}
```

#### -조건문의 중첩

```javascript
if(조건문) {
	코드
	if(조건문) {
 		코드
	...
 }
}
```

#### 2.반복문(while, do-while, for)

**while**

```javascript
while(조건문=항상 참) {
	실행코드;
}
```

**주의할점**

-무한반복

-반복횟수

**반복문의 구조**

-초기화

-카운터

-조건문

-증감

**Do-while**

최소한 한번은 실행하는 코드

do를 먼저 실행하고, 그 다음 조건문을 만남.

참이면 다시 실행하고, 아니면 끝남

```javascript
 do {
	실행할코드;
}while(조건문);
```

**For**

-간단한 반복문

```javascript
for(변수 초기화; 조건; 카운터) {
	실행코드;
}// 세미콜론 기준으로 공백으로 둬도됨. 
```

순서: 초기화->조건->실행코드->카운터

-배열+반복문

굉장히 편하게 배열에서 꺼내 쓸 수 있는 문법

```javascript
for(const item of fruits)
	console.log(item);
```

-객체+반복문

```javascript
	//객체일 때
	const user = {
        name:"홍길동",
        age:20,
        isVaild:true,
        email:"hong@mail.net"
    }

    //배열과 다르게 인덱스(번호)가 없기 때문에 반복문 사용이 어려움. 그래서 변형된 반복문
    for(const u in user)
        console.log(user[u]);
    /* 키를 꺼내오는법
    for(const u in user)
        console.log(u);
```

for와 while은 조건문 안에 아무것도 넣지 않거나 true쓰면 무한반복됨.

**반복문의 강제중지**

-break: 완전 종료

-continue: 일시 종료

반복문의 중첩

---

### Function

1.함수를 사용하는 이유

-재사용성(유지보수)

-생산성

모듈화(=컴포넌트): 특정 기능을 재사용할 수 있게 따로 떼어내서 쓸 수 있게 만드는것.

함수가 그런 기능

2.함수 작성 방법

```javascript
//1. 선언식(declaration)
function 함수명(...) {
	실행코드;
}

/*
2. 표현식(expression)
옛날방식. 무명함수(익명함수) = 함수 이름을 쓰지 않겠다.
함수는 재사용성 있게 만드는게 원칙이지만, 한 부분에서만 사용하고싶다면 굳이 이름까지 짓지 않겠다.
*/

function() {코드} () //무명함수이므로 뒤에 괄호만 붙여주면 바로 호출 가능
//but 보통은 바로 쓰지 않으니 변수에 담아놓음.
변수 = function() {코드}
변수();

/*
3. 화살표 함수(Array Function)
표현식을 좀 더 발전시킨것
괄호만 달고있으면 function인거 아는데 굳이 왜붙어야하냐.
*/
변수 = () => {코드}
 
```

3.호출방식

-인자가 없는 방식

```javascript
function line() {
for(let i = 0; i < 50; i++) {
                document.write("*");
            } 
            document.write("<br>");
        }
        //함수는 만들어놓았다고 실행되지 않음. 이름을 불러줘야함 -> 호출
        //호출 : 함수가 있는 메모리로 가서 처리한 다음, 다시 돌아와서 다음 작업을 하는 것
        //호출은 곧 interrupt -> 많이 쓰면 시스템 성능 낮아짐 
        line(); 
        document.write("고객 관리 프로그램<br>");
        line();
        document.write("1. 등록 <br>");  
        document.write("2. 검색 <br>");
        line();
```

-인자가 있는 방식

매개변수: paraneter / 실인자: argument

```javascript
//인자가 있 방식
//별 라인을 다르게하고싶다면?

function line(star) { //satr=매개변수
	for(let i = 0; i < star; i++) {
	document.write("*");
            } 
        document.write("<br>");
        }

line(40);  //  여기에 입력하면 star가 받아서 여기 입력한 수만큼 출력.
document.write("고객 관리 프로그램<br>");
line(30);  
document.write("1. 등록 <br>");  
document.write("2. 검색 <br>");
line(50);
```

-반환값이 있는 방식(return)

*값은 반드시 하나만 반환할 수 있음.

*함수를 강제로 종료할 때도 쓸 수 있음

```javascript
//반환값이 있는 방식

function hap(n1, n2) {
document.write("<h2>두 수의 합계</h2>");
let num3 = n1 + n2;
return num3; // return방식
}

let n1 = 41;
let n2 = 5;
//let num3 = hap(n1, n2); //여기서 호출했으니까 여기로 돌아와야함.
document.write("결과 : " + hap(n1, n2)); //여기서 바로 해줘도됨

```

3.Built - in function

4.함수만들 때 법칙

-하나의 함수는 한가지 기능만 수행해야함.

-재사용의 의미가 있어야함.

---

### ASC**II** 코드

(American Standard Code for Information Interchange, 미국 정보 교환 표준 부호)

이진수를 십진수로 바꿔주는 코드

아스키코드에 a-z 까지 숫자로 되어있어서 비교연산자가 가능했던것.

a가 제일 작음.

아스키 코드를 이용하여 대문자인지 소문자인지 구분하는 if문

```javascript
let str = null;
if(str >= 'a' && str <= 'z') 
	console.log("소문자");
else if (str >= 'A' && str <= 'Z')
	console.log("대문자");
else
	console.log("기타")
```

---

### DOM

#### 특징

The Document Object Model, 문서 객체 모델

접근: `selector`

특징

-HTML문서를 객체로 표현한 것

-DOM API :**Application Programming Interface(애플리케이션 프로그램 인터페이스)**

    : 프로그램을 제공할 때, 코드를 제공할 수 없으니 함수를 제공하는것 , 프로그램 짤 때 도와주는 함수꾸미

    만약 윈도우에서 프로그램을 제공하고싶으면, 윈도우에서 제공하는 API 를 가져다가 써야하는것

    요즘에는 데이터 사용도 가능함(ex. 약국 관련 어플을 만들건데, 그에 관련된 데이터를 받을 수 있게 함수를 만들어놓음)

    dom에서 사용할 수 있는 여러가지 명령어(함수)

-자바스크립트가 html에 직접 접근할 수 없음. 그래서 html 을 메모리로 올려놓음. 트리구조로. 그래야 접근가능

#### Node vs Elements

![1706490987345](image/JS_TIL/1706490987345.png)

-Node:  HTML을 이루는 모든 것. 텍스트, 주석 등

1. 문서 노드: 트리의 최상위 계층이면서 전체 문서를 가리키는 Document 객체입니다. document로 참조할 수 있으며 DOM 트리로 웹 페이지를 접근하는 시작점입니다.
2. 요소 노드(태그): 파란색 도형으로 표현된 노드들이 요소 노드입니다. HTML 태그에 해당되는 요소들입니다. 요소 노드는 속성 노드와 텍스트 노드를 자식으로 가질 수 있습니다. 같은 계급에 있는 노드들을 형제노드라고함.
3. 텍스트 노드(단말 노드): 초록색 도형으로 표현된 노드들이 텍스트 노드입니다. HTML 태그 안에 있는 텍스트들이 텍스트 노드이며 이들은 요소 노드와 달리 자식 노드를 가질 수 없습니다.

-노드들을 구분하는 이유는 노드들마다 쓸 수 있는 API가 다르기 때문


#### 검색

**-document.getElementById() : id 속성으로 검색** 

아이디로 접근하는게 제일 쉬운방법이지만, 아이디를 다 만들어놓진 않음.

```javascript
/*검색 api */
//id가 있으면 id에 접근하는게 가장 쉬운 접근법
const child2 = document.getElementById('child2'); //클래스와 다르게 이름만 찍으면됨.
console.log(child2);
const child3 = document.getElementById('child122232'); //없는아이디를 입력하면?
console.log(child3);//null값 나옴
```

**-document.getElementsByTagName : 가급적 쓰지않는게 좋다.**


**-document.querySelector() : css 선택자로 검색**

아이디가 없으면 태그로 접근하면 되지만, 태그가 너무 많기 때문에 css선택자로 접근

같은 클래스 이름이 여러개인 경우, 첫번 째 클래스값만 가져옴.

```javascript
const child1 = document.querySelector('.child');
//원래 class는 꾸며주려고 만든거지 id처럼 검색을 위한 속성은 아님.하지만 id가 없기 때문에 css 선택자 사용.
console.log(child1);
//child라는 클래스가 2개지만 첫번째로 검색된 것만 가져옴. 하나만 가져오기때문에.
```

**-document.querySelectorAll(**) : css 선택자로 검색한 모든 요소 


#### **어디서 사용가능한 속성인지 보는법**

![1706501118928](image/JS_TIL/1706501118928.png)

 이건 노드에서 사용가능한 속성이라는 뜻


-N.parentElement : 노드의 부모 요소를 반환

-E. closest( ) : 자신을 포함한 조상 요소 중 "css 선택자 "와 일치하는 가장 가까운 요소를 반환

-N.previousSibling / N.nextSibling : 노드의 이전 형제 또는 다음 형제 노드를 반환

-E.previousElementSilbling/E.nextElementSibling

-E.childern : 요소의 모든 자식을 반환

-E.firstElementChild/E.lastElementChild
