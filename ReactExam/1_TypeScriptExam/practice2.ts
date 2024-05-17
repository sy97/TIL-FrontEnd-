//function//

//1.fucntion statement
function add(a : number , b : number) : number { //typescript에서는 타입을 지정해주지않으면 any로 지정됨. / :number는 리턴값.
    return a + b;

}

const result : number = add(1, 3); //숫자가 아닌걸 넣으면 바로 오류남.
//받을 때도 숫자로 받을 수 있게 타입체크기능을 해줘야함.

//2.function expression(arrow function)
const result1 = (a:number, b:number) : number => a + b //{return a + b} 를 이렇게 줄이기 가능.

const result2 : (a:number, b:number) => number = (a, b) => a + b;

const result3 : (a:number, b:number) => number = function(a:number, b:number):number {return a + b} //위에걸 풀어서 쓰면 이렇게됨.

//------------------------------------------------------
//union & intersection //

function printValue(value: number | string | string[]) : void{
    console.log(value);
}

printValue(1);
printValue("10"); //에러남
printValue(["1", "2"]) //에러남

//이렇게 여러개의 자료형을 쓰고싶을 때, union으로 여러개의 타입을 선언해주면됨.

//intersection

const inter : {name:String, age:number} & {height:number, weight:number} = { //각각 체크할 수 있는게 있다면 '&'로묶어서 확인이 가능.
    age : 20,
    height : 170,
    weight : 70,
    name : "John"
}


//------------------------------------------------------
//typealias & interface 

//1.typealias
type NUM = number // number라는 타입의 별명을 NUM으로 짓겠다.

