import * as React from 'react';


interface IPorps {
    nextLap : string; //가장 위에 있는 랩, 아직 기록되지않은 현재 진행중인 랩
    laps : string[]; //기록될 랩. 얘는 map으로 반복문 돌려야함.
}

const Laps : React.FC<IPorps> = ({nextLap, laps}) => {
    return (
        <div>
            <div>{nextLap}</div>
            {
                laps.map((lap, index)=>{return <div key={index}>{lap}</div>})
            }
        </div>
    );
    //반복문 돌릴 때는 key값을 적어주는것이 좋음. index까지 같이 전달해줘서 key값을 index로 설정.
}
export default Laps;