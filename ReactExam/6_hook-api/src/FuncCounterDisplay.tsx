import * as React from 'react';

interface CounterDisplayProps {
    // counter={counter} 부모에서 counter라는 이름으로 전달하고 있음
    counter : number;
}


const FuncCounterDisplay:React.FC<CounterDisplayProps> = (props) => {

    return (
        <h3>CounterDisplay : {props.counter}</h3>
    );
}

export default FuncCounterDisplay;