import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title1, titleChange] = useState(['남자 코트 추천','여자 코트 추천','남자 바지 추천']);
  let [likeButton, likeChange] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">

      <div className="black-nav">
        <h4>blogreact</h4>
      </div>
      {/* <div className="list">
        <h4>{ title1[0] } <span onClick={ () => { likeChange(likeButton+1) } }>👍</span>{ likeButton }
        <button onClick={ ()=>{
          let copy = [...title1];
          copy.sort();
          titleChange(title1)
        } }> 정렬버튼 </button>
        </h4>
        <p>시간</p>
      </div>
      <div className="list">
        <h4>{ title1[1] }</h4>
        <p>시간</p>
      </div>
      <div className="list">
        <h4>{ title1[2] }</h4>
        <p>시간</p>
      </div> */}

      {
        title1.map(function(a, i){
          return(
            <div className="list" key={i}>
             <h4 onClick={()=>{setModal(!modal)}}>{ title1[i] }</h4>
             <span onClick={ () => {
                let copy = [...likeButton];
                copy[i] = likeButton[i]+1;
                likeChange(copy)
                } }>👍</span>{ likeButton[i] }
             
             <p>시간</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal></Modal> : null
      }
      

    </div>
  );
  
}

function Modal(){
  return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

  )
}

export default App;
