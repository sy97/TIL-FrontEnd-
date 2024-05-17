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

//enum
var GRADE;
(function (GRADE) {
    GRADE[GRADE["A"] = 0] = "A";
    GRADE[GRADE["B"] = 1] = "B";
    GRADE[GRADE["C"] = 2] = "C";
    GRADE[GRADE["D"] = 3] = "D";
    GRADE[GRADE["F"] = 4] = "F";
})(GRADE || (GRADE = {}));

var myGrade = GRADE.A;
myGrade = 2; //이렇게 값 추가도 가능. 
//------------------------------------------------------------------//
//any, unknown
var anyValue = 1; 
anyValue = "10"; 
anyValue = true;

var unknownValue = 1;
unknownValue = "10";
unknownValue = true;
anyValue.func(); 
//------------------------------------------------------------------//
