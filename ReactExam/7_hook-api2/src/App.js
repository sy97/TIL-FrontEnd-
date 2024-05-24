import * as React from "react";

//2. reducer()준비
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state, //기존 회원 복사
        count: state.count + 1,
        member: [...state.member,{...action.info}] // 기존 회원 배열에 새로운 회원 정보 객체를 배열의 마지막에 추가
      };
    //...state.member는 기존 회원 배열의 모든 요소를 복사, action.info는 새로운 회원 정보 객체를 배열의 마지막에 추가
    case "DELETE":
      let filterMember = state.member.filter((mem)=>{return mem.id != action.idx}); //조건을 주면 조건에 맞는건 다 걸러줌. 아이디가 같지 않은 사람들은 거
      return {
        ...state, //기존 회원 복사
        count: state.count - 1,
        member: [...filterMember] 
      };
    default:
      return state;
  }
};

//5. ID 값 생성 함수
const uid = () => {
  let a = new Uint32Array(3); //임의의 숫자옴
  window.crypto.getRandomValues(a); //a값은 암호화 된 값
  return (
    //performance 페이지가 실행되고나서 얼마나 시간이 지났는지 계산함. 36진법으로 문자화시킴
    (
      performance.now().toString(36) +
      Array.from(a)
        .map((A) => A.toString(36)) //
        .join("")
    ).replace(/\./g, "")
  );
};

const App = () => {
  //{count:0, member:[]} 1. count는 수전체 회원 수, member는 회원 목록을 저장하는 배열
  const [state, dispatch] = React.useReducer(reducer, { count: 0, member: [] }); //dispatch에 의해 reducer호출되고 가장 최신값을 state에 저장
  const [info, setInfo] = React.useState({}); //info는 입력받은 새로운 회원의 정보를 저장하는 상태 변수

  //3.  회원 정보를 추가 이벤트 핸들러
  const addMember = () => {
    dispatch({ type: "ADD", info: info }); //입력 받은 값 member[]에 저장
  };

  //4. 입력 값 변경 이벤트 핸들러 추가. 입력한 값은 member:[]에 저장(DB역할)
  const onChangeHandler = (e) => {
    setInfo({...info, id: uid(), [e.target.name]: [e.target.value] });
    //id는 절대 중복되지 않는 값
    //setInfo는 info: info중 두번째 info에 전달하고, 두번째는 첫번 info에 전달, 첫번째info는 member[]에 저장
    //입력할때마다 저장되는게 아니라 한번에 모아서 저장해야하기 때문에 전개연산자를 써줌.
  };

  const delMember = (e) => {
    dispatch({type:"DELETE", idx : e.target.value});
  } 
//value는 이벤트가 발생했을 때 넘겨주는 값임. 그래서 아이디값을 넘겨줌. 
//이것도 복사본을 삭제해줘야함. 원본을 삭제하면 안됨.

  return (
    <div>
      <div>
        <h1>전체 회원 수 : {state.count}</h1>
        <div>
          이름 :{" "}
          <input
            type={"text"}
            name="name"
            autoComplete="off"
            onChange={onChangeHandler}
          />{" "}
          {/* autoComplete='off' 자동완성해제 */}
        </div>
        <div>
          나이 :{" "}
          <input
            type={"number"}
            name="age"
            autoComplete="off"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          주소 :{" "}
          <input
            type={"text"}
            name="address"
            autoComplete="off"
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={addMember}>추가</button>
      </div>
      <table>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>나이</th>
          <th>주소</th>
          <th>삭제</th>
        </tr>
        {
          state.member.map((mem)=>(
            <tr>
              <td>{mem.id}</td>
              <td>{mem.name}</td>
              <td>{mem.age}</td>
              <td>{mem.address}</td>
              <td><button onClick={delMember} value={mem.id}>삭제</button></td> 
            </tr>
            //value는 이벤트가발생햇을 때 전달되는 속성이므로 이벤트로 받아서 해당 아이디를 삭제해주면됨.
          ))
        }
      </table>
    </div>
  );
};

export default App;
