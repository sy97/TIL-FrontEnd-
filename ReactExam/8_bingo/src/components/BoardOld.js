import React, {Component} from 'react';
import Square from './SquareOld';
import './Board.css'

export default class BoardOld extends Component {
    constructor(){
        super();
        this.state = {squares : Array(9).fill(null)}//자식이 보낸 데이터를 저장하기 위한 state. 9개니까 배열로 준비하기.
    }

    handleClick = (i) =>{
        const squares = this.state.squares.slice();
        squares[i] = 'X'; //자식이 신호를 보내왔으니 부모에 저장..? 
        this.setState({squares : squares});
    }

    renderSquare(i){ //몇번째 버튼이 눌렸는지 확인해야하기 때문에 index를 받기
        return <Square value={this.state.squares[i]} //이렇게해저야 부모가 가진 9개의 공간과 매핑됨.
        onclick={()=>{this.handleClick(i)}}/> //자식에서 클릭이벤트가 발생했다는걸 알려주는것. 실제 이벤트는 아님. 
    }
    render(){
        return(
            <div>
            <div>Next Player : X, O</div>
            <div>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            </div>
        )
    }
}
//jsx에서는 반드시 하나의 root만 가지고있어야하기 때문에 square세개를 div하나로 묶어줘야함.

