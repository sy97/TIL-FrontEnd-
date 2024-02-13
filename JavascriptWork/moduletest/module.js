export const hello = "Hello World";

//변수없이 내보내기는 안됨. 반드시 데이터는 변수에 담아서 내보내야함.
//유일하게 변수에 담지 않고 내보내는 방법
export default 123;
//단, default는 단 한번만 사용가능.

export const str = "홍길동";
export const arr = [1,2,3];
export function func () {
    console.log("func가 호출됨");
}