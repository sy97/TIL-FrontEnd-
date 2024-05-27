import * as React from 'react';
import Time from './Time';
import Controllers from './Controllers';
import Laps from './Laps';

const Stopwatch : React.FC = () => {
    return (
        <div>
            <Time 
            seconds={10}/>
            
            <Controllers 
            state={'Processing'}
            record={()=>{}} 
            start={()=>{}} 
            stop={()=>{}} 
            reset={()=>{}}/>
            
            <Laps
            nextLap='next'
            laps={["l", "a", "p", "s"]}/>
        </div>
    );
    
}
export default Stopwatch;