import * as React from 'react';

//랩  정지, 초기화  시작  버튼들이 번갈아가며 나타남.

interface IPorps {
    state : any;
    record : () => void;
    stop : () => void;
    reset : () => void;
    start : () => void;
}

const Controllers : React.FC<IPorps> = ({state, record, stop, reset, start}) => {
    
    //jsx는 root가 하나어야 하므로 전체를 <div>로 묶어주기
    return (
        <div> 
            {state === "Processing" ? 
                <div>
                    <button>랩</button>
                    <button>정지</button>
                </div>
                :
                <div>
                    <button>초기화</button>
                    <button>시작</button>
                </div>
            }
        </div> 
    );
}

export default Controllers;