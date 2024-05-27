
import Square from './Square';
import './Board.css'

const Board = ({squares, onClick}) => { //부모로부터 받아온것. 
    const renderSquare = (i) => { 
        return <Square value={squares[i]} onClick={()=>{onClick(i)}} />
    }

    return (
        <div className='board-wrapper'>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
    
}

export default Board;