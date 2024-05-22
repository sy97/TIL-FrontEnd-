import * as React from 'react';

type Action = {type:'입금'} | {type:'출금'}

const priceReducer = (price:number, action:any):number => {
    switch(action.type){
        case '입금':
            return {price : price.sum + InputValue};
        case '출금':
            return {price : price.sum - InputValue};
        default:
            throw new Error();
    }
}

const App3 = () => {
    const [price, priceDispatcher] = React.useReducer(priceReducer, {sum : 0});

    const onIn = () => { priceDispatcher({type:'입금'})}
    const onOut = () => { priceDispatcher({type:'출금'})}
    return(
        <div>
            <h1>금액을 입력하세요</h1>
            <input type="number" value={InputValue}></input>
            <hr/>
            <h2>입금 또는 출금을 선택하세요</h2>
            <button onClick={onIn}>입금</button>
            <button onClick={onOut}>출금</button>
            <h2>현재 잔액 : {price.sum}</h2>
        </div>
    );
}

export default App3;