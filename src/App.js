import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title1, titleChange] = useState(['남자 코트 추천','여자 코트 추천','남자 바지 추천']);
  let [likeButton, likeChange] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [titleNum, setTitleNum] = useState(0);
  let [입력값,입력값변경] = useState('');

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
             <h4 onClick={()=>{setModal(!modal); setTitleNum(i)}}>{ title1[i] }
             <span onClick={ (e) => {e.stopPropagation();
                let copy = [...likeButton];
                copy[i] = likeButton[i]+1;
                likeChange(copy)
                } }>👍</span>{ likeButton[i] }
             </h4>
             <p>시간</p>
             <button onClick={()=>{
               let copy = [...title1];
               copy.splice(i, 1);
               titleChange(copy);
             }}>삭제</button>
            </div>
          )
        })
      }
      
      <input onChange={(e)=>{
        입력값변경(e.target.value);
        }}></input>
      <button onClick={()=>{
        let copy = [...title1];
        copy.unshift(입력값);
        titleChange(copy)
      }}>입력</button>
      
      {
        modal == true 
        ? <Modal titleNum = {titleNum} titleChange = {titleChange} title1={title1}></Modal> 
        : null
      }
      

    </div>
  );
  
}

function Modal(props){
  return(
      <div className="modal">
        <h4>{ props.title1[props.titleNum] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copy = [...props.title1];
          copy[0] = '제목 바꿈';
          props.titleChange(copy);
        }}>글수정</button>
        
      </div>
  )
}

export default App;
