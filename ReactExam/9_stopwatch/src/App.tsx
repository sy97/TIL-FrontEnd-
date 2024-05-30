import React from 'react';
import Stopwatch from './Stopwatch';
import { Global } from '@emotion/react';
import { reset } from './reset';
import styled from '@emotion/styled';

function App() {
  return (
    <Container>
      <Global styles={reset} /> 
      <Stopwatch/>
    </Container>
);
}

const Container = styled.div`
  position : absolute;
  left : 50%;
  right : 50%;
  translate : translate(-50%, -50%)
  
`
export default App;
