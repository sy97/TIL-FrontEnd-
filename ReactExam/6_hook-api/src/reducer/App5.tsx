import * as React from 'react';



interface Action {
    type : string;
    selected : string;
}

const reducer = (state:string, action:Action):string => {
    switch(action.type){
        case "SELECTEDPLACE":
            return action.selected;
        default:
            return state;
    }
}




const App5:React.FC = () => {

    const onChangeHandler=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch({type: "SELECTEDPLACE", selected: e.target.value})
    }

    const onClickHandler=()=>{
        alert()
    }
    const [selected, dispatch] = React.useReducer(reducer, '');

    return (
        <div>
            <h1>라디오 버튼의 value를 출력</h1>
            <select onChange={onChangeHandler}>
            <option >부산</option>
            <option >서울</option>
            <option >제주</option>
            </select>
            <button onClick={onClickHandler}>확인</button>
        </div>
    );
}

export default App5;