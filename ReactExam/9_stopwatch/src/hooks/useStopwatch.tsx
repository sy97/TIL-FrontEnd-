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
    lapTime : number;
}

export interface IUseStopwatchReturnType{
    seconds : number;
    
    status : STATUS; //STATUS가 하나의 자료형이됨.
    start : ()=>void;
    stop : ()=>void;
    reset : ()=>void;
    record : ()=>void;

    nextLap : ILap;
    laps : ILap[];
}

const useStopwatch = () =>{ 
    const [seconds, setSeoconds] = React.useState(0);
    const [status, setStatus] = React.useState(STATUS.PROCESSING); 
    const [laps, setLaps] = React.useState<ILap[]>([]);

    
    const nextLap = React.useMemo<ILap>(() => {
        return {
            id: laps.length + 1,
            title: '랩 ',
            lapTime: seconds - (laps[0]?.seconds ?? 0),
            seconds,
        };
    }, [seconds, laps]);
    
    
    /*
    const nextLap : ILap = {
        id: laps.length + 1,
        title: '랩 ',
        seconds,
        lapTime: seconds - (laps[0]?.seconds ?? 0)
    }
    */

    const start = React.useCallback(() => {
        if(status !== STATUS.STOP){
            return;
        }
        setStatus(STATUS.PROCESSING);
    }, [status]); //데이터가 변경되기 전까지는 딱 한번만 만들어지게 useCallback사용. [] 는 의존성. 이 값이 바뀔 때까지 딱 한번만 생성.

    const stop = React.useCallback(() => {
        if(status !== STATUS.PROCESSING){
            return;
        }
        setStatus(STATUS.STOP);
    }, [status]);

    const reset = React.useCallback(()=>{
        if(status !== STATUS.STOP){
            return;
        }
        setSeoconds(0);
        setLaps([]); //laps는 다시 빈 배열로 초기화
    }, [status]);
    
    
    const record = React.useCallback(()=>{
        if(status !== STATUS.PROCESSING){
            return;
        }

        setLaps((prev)=>{ return [nextLap, ...prev]}) //prev: 기존 labs변수
    }, [status, nextLap]);

    
    React.useEffect(()=>
        {
            let intervalId : number;
            
            if(status === STATUS.PROCESSING ) {
                intervalId = window.setInterval(
                    ()=>{setSeoconds((prev)=> prev + INTERVAL/MILLISEC_PER_SECONDS)}, INTERVAL)
            } 
        

            return ()=>{
                clearInterval(intervalId);
        }
        
    },[status]);
     //함수가 시간을 계속 뿌려주는 함수이어야함. 
    //0.01= 10/1000로 해주기위해 INTERVAL/MILLISEC으로 해주기. 
    //변수에 저장을 해줘야 나중에 중지시킬 수 있음.
    //의존성 안에 있는 데이터가 변경되었을 때만 함수실행. status가 변할 때만 실행해줘야하기 때문에 의존성에는 status값 넣어주기.

    return{
        seconds, status, laps, start, stop, reset, record, nextLap
    };
}

export default useStopwatch;