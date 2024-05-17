///number, string, boolean ///
var num = 10; //자바 스크립트에서는 이걸 숫자로 넘기든 문자로 넘기든 전혀 상관 없음.
var num2 = 10; //타입스크립트는 이렇게 체크를 해줌. 여기에 문자넣으면 오류남.
//타입스크립트는 웹브라우저로 가져가면 오류가남. 자바스크립트만 읽을 수 있기 때문에. 그래서 tsc로 컴파일해야함.
num2 = 10; //이제는 여기에 숫자 외에 다른걸 넣을 수 없음.  
num2 = 3.14; //실수도 가능
var str = "10";
//만약 문자열을 넣지않고 컴파일하면 에러남.
var bool = true;
//array, object, enum
//서로다른 데이터를 묶을수 있음 
var arr_num = [1, 2, 3]; //숫자로 집어넣을건데 배열형태로 넣을것이다. number[]. 이렇게 체크함.
var arr_bool = [true, false]; //여긴 boolean형태만 넣을 수 있게.
//객체
var user = {
    name: "홍길동",
    age: 20,
    married: true
};
//enum은 별도의 내가원하는 자료형을 만들 수 있음.
var GRADE;
(function (GRADE) {
    GRADE[GRADE["A"] = 0] = "A";
    GRADE[GRADE["B"] = 1] = "B";
    GRADE[GRADE["C"] = 2] = "C";
    GRADE[GRADE["D"] = 3] = "D";
    GRADE[GRADE["F"] = 4] = "F";
})(GRADE || (GRADE = {}));
//객체의 성격도 그대로 가지고 있기 때문에, a를 쓰고싶다면 grade.a 라고써야함.
var myGrade = GRADE.A;
myGrade = 2; //이렇게 값 추가도 가능. 
//------------------------------------------------------------------//
//any, unknown
var anyValue = 1; //: any라고하면 어떤값이든 가능함. 체크를 안함.
anyValue = "10"; //문자를 넣어도됨.
anyValue = true;
//unknown도 any랑 같음.
//but any보다는 unknown을 추천함. unknown은 잘못된 코드를 방지해주는 기능이 있기 때문에.
var unknownValue = 1;
unknownValue = "10";
unknownValue = true;
anyValue.func(); //anyvalue는 객체가 아니라 변수라 함수를 호출할수가없음. func는 심지어 함수도아님. 그런데도 오류가 안뜸.
//unknownValue.func() //반면 unknonw은 오류가남. func()라는 함수가 없을 뿐더러, 객체도 아니기때문에. 
//------------------------------------------------------------------//
//void, never : 함수와 관련된 키워드
function hello() {
    console.log("Hello");
    //여기서 return쓰면 에러남.
}
function hello2() {
    return "hello";
}
function hello3() {
    console.log("Hello");
    //리턴값 주면 에러, 안해줘도 에러. never는 함수가 절대로 호출한곳으로 돌아가면 안됨. 
    //돌아가지 않으려면 붙잡아놔야함. 
    //무한반복
    //while(true){}
    //또는 시스템이 수거하도록 에러발생시키기
    throw 'Error';
}
//------------------------------------------------------------------//
//null, undefined
var nullValue = null; // 반드시 null값만 집어넣어야함.
//const nullValue2 : null = undefined; //undefined도 넣을수있는데, 설정파일에서 "strictNullChecks": true 를 해줬기 때문에 불가능.
//const undefinedValue : undefined = null; //반대도가능. 한데, null과 undefined를 엄격하게 구분하기로했으므로 이제 불가능.
