import * as React from 'react';
import { ILap } from './hooks/useStopwatch';

interface IPorps {
    nextLap : ILap; //가장 위에 있는 랩, 아직 기록되지않은 현재 진행중인 랩
    laps : ILap[]; //기록될 랩. 얘는 map으로 반복문 돌려야함.
}

//hook으로 만든 ILap에서 id, title, seconds를 설정해줬기 때문에 아래에도 lap.title이런식으로 적어줘야함.

const Laps : React.FC<IPorps> = ({nextLap, laps}) => {
    return (
        <div>
            <div>{nextLap.title} with {nextLap.seconds}</div>
            {
                laps.map((lap)=>{return <div key={lap.id}>
                    {lap.title} with {lap.seconds}
                    </div>})
            }
        </div>
    );
}
export default Laps;