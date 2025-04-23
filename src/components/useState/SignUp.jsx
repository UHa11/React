import React, { useState } from 'react'

//이름과 성별을 입력받을 수 있도록 만들고
//submit버튼 클릭시 이름 : ~~~ 성별 : ~~ 를 출력해라 (alert)

const SignUp = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("man");

    const handleChangeName = (ev) => {
        setName(ev.target.value);
    }
    //여기서 ev는 React가 전달해주는 이벤트 정보 그 자체
    // React에서는 onChange, onClick, onSubmit 등 이벤트가 발생하면
    // 자동으로 이벤트 정보를 담은 SyntheticEvent 객체를 함수
    
    //ev.target은 이벤트가 실제로 발생한 HTML 요소
    //ev.target은 바로 그 <input> DOM 요소
    //즉, ev.target.value는 해당 <input> 요소 안에 사용자가 input 입력한 현재 텍스트 값을 가리킨다.
    const handleChangeGender = (ev) => {
        setGender(ev.target.value);
    }//ev.target.value -> select 의 option을 가리킴

    const handleSubmit = (ev) => {//onSubmit 
        alert(`이름 : ${name}, 성별 : ${gender}`);
        ev.preventDefault(); // a태그나 submit태그같은 고유동작을 중당하기위한 이벤트 방지
        //ev.stopPropagation(); 부모엘리먼트에게 이벤트가 전파되는 것을 막을 수 있음
    }// alert()는 브라우저가 기본적으로 제공하는 함수.. window.alert() 의 줄임말// 작은 팝업창

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                이름 : 
                <input type="text" value={name} onChange={handleChangeName}/>
                {/* 현재 이름 */}
            </label>
            <br /><br />
            <label>
                성별 : 
                <select value={gender} onChange={handleChangeGender}>
                    <option value="man">남자</option>
                    <option value="woman">여자</option>
                </select>
            </label>
            <br /><br />
            <button type='submit'>제출</button>
        </form>
    )
}

export default SignUp