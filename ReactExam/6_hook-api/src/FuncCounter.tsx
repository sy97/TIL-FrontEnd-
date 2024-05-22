import React, {ReactElement, useEffect, useState} from 'react';
import FuncCounterDisplay from './FuncCounterDisplay';
import { useCounter } from './hooks/useCounter'; //default로 안했기 떄문에 중괄호로 import해야함.
import { useToggle } from './hooks/useToggle';
import useWindowWidth from './hooks/useWindowWidth';

interface CounterProps {
    title: string;
    num: number;
}

interface CounterState {
    num: number;
    hideCount : boolean
}

//function FuncCounter (props:CounterProps):ReactElement{ 
    //const FuncCounter = (props:CounterProps) => {

const FuncCounter:React.FC<CounterProps> = (props) => {    
    const[hideCount, toggle] = useToggle();
    const{count, plus, minus} = useCounter(); //하나는 변수, 두개는 함수. return할 때 중괄호로 넘겨줬기 때문에 여기도 {}로.
    const {width, cleanup} = useWindowWidth();

    //const toggle = ()=>{ setHideCount(!hideCount) }



    return( //함수형 컴포넌트는 return, 클래스형 컴포넌트는 render
        <div>         
            <h1>{props.title} {props.num} / {width} </h1> 
            <h3>Counter : {count}</h3> 
            {!hideCount && <FuncCounterDisplay counter={count}></FuncCounterDisplay>} 
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Plus</button>
            <button onClick={toggle}>Toggle Counter</button>
            <button onClick={cleanup}>Clean</button>

        </div>
    )
}

export default FuncCounter;