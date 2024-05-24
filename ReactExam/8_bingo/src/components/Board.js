import React, {Component} from 'react';
import Square from './Square';
import './Board.css'

export default class Board extends Component {
    renderSquare(i){ //몇번째 버튼이 눌렸는지 확인해야하기 때문에 index를 받기
        return <Square/>
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

