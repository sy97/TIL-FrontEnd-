import * as React from 'react';

interface State {
    count : number;
}

type Action = {type : 'increment'} | {type : 'decrement'};

function reducer(state:State, action:any):State {
    switch(action.type){
        case 'increment':
            return {count : state.count + 1}
        case 'decrement':
            return {count : state.count - 1}
        default:
            throw new Error();
    }
}

const App1 = () => {
    //const [count, setCount] = React.useState(0);
    const [state, dispatch] = React.useReducer(reducer, {count : 0}); //state안에 count라는 변수가 추가된것. 추가하면 계속 추가됨. 하나의 객체처럼.

    const increment = () => dispatch({type : 'increment'}); //increment가 action으로 넘어감. dispatch는 action을 만들어주기위한 함수.(?)
    const decrement = () => dispatch({type : 'decrement'});
    return(
        <div>
            <p>Count : {state.count} </p>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
}

export default App1;
