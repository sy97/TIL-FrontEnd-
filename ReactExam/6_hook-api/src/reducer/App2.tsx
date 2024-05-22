import * as React from 'react';

type Action = {type:'HAMBURGER'} | {type:'POTATO'} | {type:'COKE'}

const priceReducer = (price:number, action:any):number => {
    switch(action.type){
        case 'HAMBURGER':
            return 4000;
        case 'POTATO':
            return 3000;
        case 'COKE':
            return 1000;
        default:
            return price;
    }
}

const App2:React.FC = () => { //component라는 것을 명시 
    const [price, priceDispatcher] = React.useReducer(priceReducer, 0);

    const onHamburger = () => { priceDispatcher({type:'HAMBURGER'})}
    const onPotato = () => { priceDispatcher({type:'POTATO'})}
    const onCoke = () => { priceDispatcher({type:'COKE'})}

    return (
        <div>
            <h1>햄버거 가게</h1>
            <h3>지불할 금액 : {price}</h3>
            <hr/>
            <button onClick={onHamburger}>햄버거 (4000원)</button>
            <button onClick={onPotato}>감자튀김 (3000원)</button>
            <button onClick={onCoke}>콜라 (1000원)</button>
        </div>
    )

}

export default App2;