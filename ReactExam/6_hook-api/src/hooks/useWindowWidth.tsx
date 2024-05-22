import * as React from 'react';
import { hasOnlyExpressionInitializer } from 'typescript';

//윈도우창 크기를 조절할 때마다 가로의 길이를 나에게 알려줄 수 있도록.

const useWindowWidth = () => {
    const [width, setWidth] = React.useState(window.innerWidth); //현재 윈도우의 기본가로길이값을 width에 넣어주기
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    
    const clean = React.useEffect(()=>{
        window.addEventListener('resize', handleResize)
        return () => {
        window.removeEventListener('resize', handleResize);
    }

    }, 
    [width]); 
    const cleanup = () => {window.removeEventListener('resize', handleResize)}
    return {width, cleanup};
}

export default useWindowWidth;