import * as React from 'react';
import { ILap } from './hooks/useStopwatch';
import styled from '@emotion/styled';

interface IPorps {
    nextLap : ILap; //가장 위에 있는 랩, 아직 기록되지않은 현재 진행중인 랩
    laps : ILap[]; //기록될 랩. 얘는 map으로 반복문 돌려야함.
}

//hook으로 만든 ILap에서 id, title, seconds를 설정해줬기 때문에 아래에도 lap.title이런식으로 적어줘야함.

const Laps : React.FC<IPorps> = ({nextLap, laps}) => {
    return (
        <div>
            <Box>
                <span>{nextLap.title} </span> 
                <span>{nextLap.lapTime}</span>
            </Box>
            {
                laps.map(
                    (lap)=>{
                        return (
                            <div key={lap.id}>
                            <Box>
                            <span>{lap.title}</span>
                            <span>{lap.lapTime}</span>
                            </Box>
                        </div>
                        )
                    }
                )
            }
        </div>
    );
}

const Container = styled.div`
    flex : 1;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    overflow: auto;
`

const Box = styled.div`
    display: flex;
    color: white;
    font-size: 24px;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`
export default Laps;