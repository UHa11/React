import React from 'react'

const Toolbar = ({isLogin, onClickLogin, onClickLogout}) => {
    

    return (
        <div>
            {
                isLogin ? 
                <div>
                    <div>안녕하세요. 김뉴뉴님</div>
                    <button onClick={onClickLogout}>로그아웃</button>
                </div> :
                <div>
                    <div>로그인이 필요한 서비스입니다.</div>
                    <button onClick={onClickLogin}>로그인</button>
                </div>
            }
            {/* 현재 로그인 상태가 로그아웃 상태라면 로그아웃할수있는 툴바가 나타남 */}
            {/* 로그아웃 버튼을 누르면 onClickLogout함수를 사용해 로그인 상태로 바꾼다. */}
            {/* React의 가장 중요한 특징 중 하나인 리렌더링(re-rendering)때문에 버튼을 
            누를때마다 조건문이 다시 실행된다.  */}
            {/* 상태(state)나 props가 변경되면, 해당 컴포넌트와 관련된 부분이 "다시 렌더링(rendering) */}
            
        </div>
    )
}

export default Toolbar