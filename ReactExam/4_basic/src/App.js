/* eslint-disable */ //eslint가 검사해주는것 잠시 비활성화
import logo from './logo.svg';
import './mystyle.css';
import './App.css';
import {useState} from "react" //state를 쓰기 위해 import

//html처럼 보이지만 얘네는 진짜 html이 아님.
function App() {
  //let posts = "첫번째 블로그 글입니다."
  //const [a, b] = [10, 100] 이렇게하면 a에는 10, b에는 100이 할당됨. 자바스크립트에서는 destructuring이라고 부름.


  let [title, setTitle] = useState(["첫번째 블로그 글입니다.", "남자 코트 추천", "강남 우동 맛집"]); //변수대신 useState에 값을 넘겨줌. 그럼 변수처럼 관리해줌.
  //a는 텍스트 그대로 전달. b는 setState라는 함수가 전달됨. setter메서드가 호출됨. 
  //state는 값을 수정할 수 가 없기 때문에 값을 수정할 수 있는 세터메서드를 같이 전달. 그래서 이름을 title, setTitle로 변경.

  //title = "두번째 블로그 글입니다." //이렇게 수정은되지만 권장하지않음.
  
  let[good, setGood] = useState(0);
  

  //위의 "남자 코트 추천"을 "여자 코트 추천"으로 바꾸는 방법
  /*
    원본을 수정해서는 안됨.
    복사본을 만들어서 수정해야함. 
    기본타입들은 immutable이라 수정이 불가능,
    하지만 object나 array는 mutable이라 수정가능 ?
    여튼 복사본을 만들어서 수정하면됨.
    
    swallow copy => let title_copy = title; 이렇게 주소만 복사하는것.
    deep copy => 데이터를 복사하여 진짜 복사본 만드는것.
  */

  return (
    <div className="App">
      <div className="black-nav" style={{color:"red", fontSize: "30px"}}> 
        <div>블로그 개발 중</div>
      </div>
      <button onClick={()=>{
        let title_copy = [...title]; 
        title_copy[1] = "여자 코트 추천";
        setTitle(title_copy);
      }}>버튼</button>
      <div className="list">
        <h4>{title[0]} <span style={{fontSize:'10px',}} onClick={()=>{setGood(good++)}}> 좋아요 👻</span> {good} </h4>
        <p>5월 20일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>5월 21일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>5월 22일 발행</p>
        <hr/>
      </div>

      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    </div>
  );
}

//이걸 index.html로 던져줘야, index.html에 보임. 
export default App;
