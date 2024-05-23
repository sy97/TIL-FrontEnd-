import * as React from 'react';

type Action = {type:"DEPOSIT", money : number} | {type:"WITHDRAW", money : number};

const priceReducer = (state:number, action:Action):number => {
    switch(action.type){
        case 'DEPOSIT':
            return state + action.money;
        case 'WITHDRAW':
            return state- action.money;
        default:
            return state;
    }
}

const App3:React.FC = () => {
    const [state, dispatch] = React.useReducer(priceReducer, 0);
    const [money, setMoney] = React.useState<number>(0);

    const onDeposit = () => { dispatch({type:"DEPOSIT", money : money})};

    const onWithdraw = () => { dispatch({type:"WITHDRAW", money : money})}
    return(
        <div>
            <h1>금액을 입력하세요</h1>
            <input type="number" onChange={(e)=>{setMoney(Number(e.target.value))}} step={1000}></input>
            <hr/>
            <h2>입금 또는 출금을 선택하세요</h2>
            <button onClick={onDeposit}>입금</button>
            <button onClick={onWithdraw}>출금</button>
            <h2>현재 잔액 : {state}</h2>
        </div>
    );
}
//step={1000} : 1000원단위로 입력가능.

export default App3;