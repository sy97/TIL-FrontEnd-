//function//
//1.fucntion statement
function add(a, b) {
    return a + b;
}
var result = add(1, 3); //숫자가 아닌걸 넣으면 바로 오류남.
//받을 때도 숫자로 받을 수 있게 타입체크기능을 해줘야함.
//2.function expression(arrow function)
var result1 = function (a, b) { return a + b; }; //{return a + b} 를 이렇게 줄이기 가능.
var result2 = function (a, b) { return a + b; };
var result3 = function (a, b) { return a + b; }; //위에걸 풀어서 쓰면 이렇게됨.
//------------------------------------------------------
//union & intersection //
function printValue(value) {
    console.log(value);
}
printValue(1);
printValue("10"); //에러남
printValue(["1", "2"]); //에러남
//이렇게 여러개의 자료형을 쓰고싶을 때, union으로 여러개의 타입을 선언해주면됨.
//intersection
var inter = {
    age: 20,
    height: 170,
    weight: 70,
    name: "John"
};
var num1 = 1; //이렇게 별명으로 쓰기 가능.
var num3 = 2;
function printValue2(value) {
    console.log(value);
}
var inter2 = {
    age: 20,
    height: 170,
    weight: 70,
    name: "John"
};
var user1 = {
    age: 20,
    height: 170,
    weight: 70,
    name: "John"
};
