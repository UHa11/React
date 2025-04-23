// import { useState } from 'react'
import './App.css'
// import LifecycleText from './components/LifecycleText'
// import Comment from './components/Comment';
import CommentList from './components/CommentList'

function App() {
  // const [isButton, setIsButton] = useState(true); // 초기값 true
  // isButton은 Boolean 상태 (true 또는 false) -> useState(true) -> 초기값으로 true로 해놧기 때문에
  // setIsButton()을 호출하면 값을 변경할 수 있음


  // const toggleButton = () =>{
  //   setIsButton(!isButton);
  // } 

  return (
    <>
    
      {/* {isButton && <LifecycleText/>}  */}
      {/* 초기값이true 이기때문에 처음에 <LifecycleText /> 컴포넌트가 보임 */}
      {/* <button onClick={toggleButton}>count없애기</button> */}

      {/* <Comment message={"안녕하세요"}/> */}
      <CommentList />
    </>
  )
}

export default App
