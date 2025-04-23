import React, { useState } from 'react'

/*
    state : 컴포넌트의 상태값
    useState : 컴포넌트의 상태를 생성하고 관리할 수 있게 해주는 react hook
    -> 컴포넌트는 state값이 변경되면 이를 확인하고 요소를 리렌더링 해준다.

    [사용법]
    const [변수명, set변수명] = useState(초기값);

    React에서 setState와 같은 상태 업데이트 함수는 비동기적으로 작동한다.
    즉, 상태를 바로바로 반영하지 않고, 여러 상태 업데이트를 배치에서 한번에 처리하여고 한다.

    setNum(prevNum => prevNum - 1)에서는 클로저가 해당 데이터를 저장해서 사용할 수 있게 해준다.
*/

// function setNum = (value) => {
//     if(typeof value === 'function'){
//         prevNum = value(prevNum);
//     } else {
//         prevNum = value;
//     }
// }


// useState를 통해 숫자 상태(count)를 증가/감소시키고,
// "상태 업데이트가 비동기적으로 처리됨"과 이전 상태에 의존하는 업데이트는 콜백 방식으로 처리해야 한다"는 개념
const UseStateTest = () => {
    //const num = 0;
    const [num, setNum] = useState(0); //[현재상태값,상태값을 바꿀 함수] = 상태초기값

    const onClickPlus = () => {
        //num += 1; 현재 상태를 직접 상용해서 변경 -> state변경x -> 리렌더링x
        setNum(num + 1); 
        setNum(num + 1);
        //결과적으로 num + 1이 됨
        // React는 성능을 위해 상태 업데이트를  실시간으로 즉시 처리하지 않고, 모아서 한꺼번에 처리(batch update)
    }
    //위는 기본적인 상태 업뎃으로 비동기+ 배치 처리됨.
    const onClickMinus = () => {
        setNum(prevNum => prevNum - 1);
        setNum((prevNum) => { 
            console.log("이전 상태 출력 : ", prevNum)
            return prevNum - 1;
        });
        console.log("상태 업데이트 요청");
        //setNum(prev => prev ± 1)처럼 이전 상태를 기반으로 작성하는 패턴은 안정적이고 정확한 상태 업데이트를 보장
        // 상태가 이전 상태에 의존하는 경우에는
        //항상 상태 업데이트 함수에 콜백을 사용하는 방식(prevNum => prevNum - 1)을 사용해야 한다.
        //같은 함수 안에서 여러 번 상태 변경할 땐 꼭 콜백 형태로 써야한다.
    }
    //prev는 이전 상태값
    // prev는 React가 자동으로 넘겨주는 "가장 최신 상태값".
    // 이 방식은 상태 변경이 겹치더라도 순서대로, 정확하게 처리됨.
    // 이게 바로 "콜백 형태의 상태 업데이트"
    // 콜백 함수가 다른함수의 매개로 전달되어 사용되는 것을 콜백이라함

    return (
        <div>
            <div>COUNT : {num}</div> 
            <button onClick={onClickPlus}> + </button>
            <button onClick={onClickMinus}> - </button>
        </div>
    )
}

export default UseStateTest