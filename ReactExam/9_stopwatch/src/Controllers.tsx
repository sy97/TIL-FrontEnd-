import * as React from 'react';
import { STATUS } from './hooks/useStopwatch';

//랩  정지, 초기화  시작  버튼들이 번갈아가며 나타남.

interface IPorps {
    state : STATUS; //useStopwatch에서 지정해놓은 자료형.
    record : () => void;
    stop : () => void;
    reset : () => void;
    start : () => void;
}

const Controllers : React.FC<IPorps> = ({state, record, stop, reset, start}) => {

    //jsx는 root가 하나어야 하므로 전체를 <div>로 묶어주기
    return (
        <div> 
            {state === STATUS.PROCESSING ? 
                <div>
                    <button onClick={record}>랩</button>
                    <button onClick={stop}>정지</button>
                </div>
                :
                <div>
                    <button onClick={reset}>초기화</button>
                    <button onClick={start}>시작</button>
                </div>
            }
        </div> 
    );
}

export default Controllers;