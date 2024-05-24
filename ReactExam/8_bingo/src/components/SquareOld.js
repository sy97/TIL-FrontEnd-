import React, {Component} from 'react';
import './Square.css'

export default class Square extends Component {
    render(){
        return(
            <button className='square' 
                onClick={()=> this.props.onClick()}> 
                {this.props.value}
            </button> //board.js에서 부모가 전달해준 데이터를 뿌리기. 자동으로 상속되기 떄문에 부모가 전달해준 속성이 있음. 
            //그 다음, this.state.value로 바꿔주기.
            //this.props.onclick()으로 부모에게 자식이 이게 눌렸다는걸 알려주기. 
        )
    }
}
