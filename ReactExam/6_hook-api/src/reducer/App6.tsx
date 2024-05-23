import * as React from 'react';

interface Member {
    id : string;
    name : string;
    age : string;
    address : string;
}

const reducer = (state:any, action:any)=> {
    return state;
}




//member변수가 일종의 db. 입력한걸 db에 저장하는것.
const App6:React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, {count:0, member:[]});
    const [info, setInfo] = React.useState({});

    const addMember= () =>{
        dispatch({type :"ADD", info : info})
    }

    const onChnageHandler = () => {

    }

    return(
    <div>
        <div>
            <h1>전체 회원 수 : </h1>
            <div>
                이름 : <input type={'text'} name="name" autoComplete='off'
                onChange={onChnageHandler}/> 
            </div>
            <div>
                나이 : <input type={'number'} name="age" autoComplete='off'
                onChange={onChnageHandler}/>
            </div>
            <div>
                주소 : <input type={'text'} name="address" autoComplete='off'
                onChange={onChnageHandler}/>
            </div>
            <button onClick={addMember}>추가</button>
        </div>
        <table>
            <tr>
                <th>이름</th><th>나이</th><th>주소</th><th>삭제</th>
            </tr>
        </table>
    </div>
    );
}

export default App6;