import styled from '@emotion/styled';
import * as React from 'react';
import { stopWatchTime } from './utils/stopWatchTime';

//type을 미리 지정해두기 
interface IPorps {
    seconds : number
}


const Time : React.FC<IPorps> = ({seconds}) => {
    return <Container>{stopWatchTime(seconds)}</Container>;
}
const Container = styled.div`
    color : white;
    font-size : 60px;
    flex : 1;

    display : flex;
    justify-content : center;
    align-items : center;
`
export default Time;