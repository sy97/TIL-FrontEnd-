import * as React from 'react';

type useToggleReturnType = [boolean, ()=> void]

export function useToggle():useToggleReturnType { 

    const[hideCount, setHideCount] = React.useState(false);
    const toggle = () => {setHideCount((prev)=> !prev )}; 
    
    return [hideCount, toggle];
}