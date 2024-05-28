import * as React from 'react';
import { STATUS } from './hooks/useStopwatch';
import styled from '@emotion/styled';
import Button from './utils/Button';

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
        <Container> 
            {state === STATUS.PROCESSING ? 
            <>
                <div>
                    <Button type="NORMAL" onClick={record}>랩</Button>
                    <Button type="NORMAL" onClick={stop}>정지</Button>
                </div>
            </>    
                :
            <>    
                <div>
                    <Button type="NORMAL" onClick={reset}>초기화</Button>
                    <Button type="NORMAL" onClick={start}>시작</Button>
                </div>
            </>    
            }
        </Container> 
    );
}

const Container = styled.div`
    flex : none;

    display : flex;
    padding : 30px;
    justify-content : space-between;
    align-items : center;

    border-bottom : 1px solid #fff;
`

export default Controllers;