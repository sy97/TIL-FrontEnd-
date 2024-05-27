import * as React from 'react';

//type을 미리 지정해두기 
interface IPorps {
    seconds : number
}


const Time : React.FC<IPorps> = ({seconds}) => {
    return <div>{seconds}</div>;
}

export default Time;