import * as React from 'react';

interface useCounterReturnType {
    count : number; 
    plus : () => void; 
    minus : () => void;
}

export function useCounter():useCounterReturnType { //counter에서 분리해서 나온거니까 return타입은 useCounterReturnType
    const[count, setCount] = React.useState(0);

    const plus = () => {setCount((prev)=> prev + 1 )}; //1씩 증가 시키는 코드. 기존값을 함수의 매개변수로 가져옴. (prev) => {prev+1}
    const minus = () => {setCount((prev)=> prev - 1 )};
    
    return { //main인 FuncCounter에서 쓸 수 있게 던져주기. 
        count,
        plus,
        minus
    };
}


