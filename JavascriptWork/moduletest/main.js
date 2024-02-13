/*
import {hello,str as name,arr,func} from './module.js';
import number from './module.js';
//자스들끼리 데이터 주고받는것.
//default값으로 받은 123을 number라는 변수에 담아주기. 이 때는 중괄호 안해줘도됨.

//const str_main = "여기는 main.js 입니다.";
console.log("main.js : ", hello);
console.log(number);
console.log(name);//받아온 변수의 이름을 바꿔줄 수 있음.
console.log(arr);
console.log(func());

const parent = document.querySelector(".parent");
    console.log(parent.innerHTML);
*/

/*가져올 데이터가 많아질 때 */
import * as mod from './module.js';
console.log(mod.hello);
console.log(mod.arr);
console.log(mod.str);
console.log(mod.func);
console.log(mod.default);

/*많은 자바스크립트 파일 가져올때 */
/*
import {a} from './a.js';
import {b} from './b.js';

console.log(a());
console.log(b());
*/

/*위처럼 일일히 부를 필요 없이, 중간다리 역할인 util에서 바로 불러오면됨 */
import {a, b} from './util.js';
console.log(a());
console.log(b());