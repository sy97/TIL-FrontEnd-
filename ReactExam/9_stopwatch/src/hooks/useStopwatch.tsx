import * as React from 'react';
import { INTERVAL, MILLISEC_PER_SECONDS } from '../constants';

export enum STATUS { //열거형이므로 enum으로 지정, 다른데서 쓸 수 있도록 export해줘야함.
    PROCESSING,
    STOP
}

//Interface앞에는 I를붙여주는게 관례
export interface ILap{ //랩 부분
    id : number; //순서 숫자? 
    title : string; //'랩'이라고 써질부분
    seconds : number; //숫자
}

interface IUseStopwatchReturnType{
    seconds : number;
    
    status : STATUS; //STATUS가 하나의 자료형이됨.
    start : ()=>void;
    stop : ()=>void;
    reset : ()=>void;
    record : ()=>void;

    laps : any;
}

const useStopwatch = () =>{ 
    const [seconds, setSeoconds] = React.useState(0);
    const [status, setStatus] = React.useState(STATUS.PROCESSING); 
    const [laps, setLaps] = React.useState<ILap[]>([]);
    
    const start = React.useCallback(() => {}, []); //데이터가 변경되기 전까지는 딱 한번만 만들어지게 useCallback사용. [] 는 의존성. 이 값이 바뀔 때까지 딱 한번만 생성.
    const stop = React.useCallback(()=>{}, []);
    const reset = React.useCallback(()=>{}, []);
    const record = React.useCallback(()=>{}, []);

    window.setInterval(()=>{}, INTERVAL); //함수가 시간을 계속 뿌려주는 함수이어야함. 

    return{
        seconds, status, laps, start, stop, reset, record
    };
}

export default useStopwatch;