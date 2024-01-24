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


---



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

```  html
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
