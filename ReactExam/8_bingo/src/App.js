import './App.css';
import Board from './components/Board';
import React, { useState } from 'react';

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0); 

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length -1];
    const newSquares = newCurrent.squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, { squares: newSquares }]);
    setXIsNext(!xIsNext);

    setStepNumber(newHistory.length);
  }

  const moves = history.map((step, move)=>{ //step:index /move:해당 보드판
    const desc = move ? 'GO TO MOVE #' + move : 'GO TO GAME START'; //처음엔 null값이니까 go to game start.

    //되돌아가기 함수
    const jumpTo = (step) => {
      setStepNumber(step); 
      setXIsNext((step%2) === 0); 
    }
    return(
      <li key={move}>
        <button className='move-button' onClick={()=>jumpTo(move)}>{desc}</button> 
      </li>
    );
  });
  //history안에 있는 여러개의 보드판을 반복을 돌려서 꺼내오기


  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default App;