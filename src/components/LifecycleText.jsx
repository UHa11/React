import React, { Component } from 'react'
/*
    class component
    state(필드대체)를 가지고있고 이를 수정할 수 있음.
    생명주기에 따른 메서드를 사용할 수 있음.

    state값이 변경되는 리액트는 변화를 감지하고 그에맞게 컴포넌트를 리렌더링 한다.
    그래서 state값을 변경할 때는 state에 어떤 값을 직접 넣어서 변경하는 것이 아닌
    this.setState라는 함수를 이용해서 새로운 state값을 넣어주면 된다.

    react의 component 라이프사이클은 생성(mount), 수정(update), 제거(unmount) 단계로 나누어
    각 단계마다 componentDidMount, componentDidUpdate, componentWillUnmount같은 메서드를 실행하여
    DOM을 조적하거나 리소스를 정리할 수 있는 기능을 말함.
    
    - mount(마운트)는 컴포넌트가 처음으로 화면(DOM)에 나타나는 것
    - update = state나 props가 바뀌어 다시 렌더링됨
    - unmount = 화면에서 사라짐(제거됨)
    */

// 클래스형 컴포넌트를 이용해 생명주기(lifecycle)를 학습하기 위한 예제
class LifecycleText extends Component {
    // 컴포넌트가 처음 만들어질 때 실행됨
    constructor(props){
        super(props);

        //js에서는 class에 필드영역이 없기때문에
        //저장하고싶은 데이터를 state라는 객체에 key-value형태로 저장한다.
        this.state = {count: 0}; //초기값 설정
        console.log("constructor : 컴포넌트 생성자 호출");
    }

    // 컴포넌트가 마운트되었을 때 호출(처음 렌더링될 때) 
    componentDidMount(){
        console.log('componentDidMount : 컴포넌트가 마운트 되었습니다.')
    }
    // 컴포넌트가 처음으로 화면에 렌더링된 직후 실행
    // 보통 여기서 API 호출이나 타이머 설정 등을 함

    //컴포넌트가 업데이트된 후 호출
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate : 컴포넌트가 업데이트 되었습니다.")
        console.log("이전 state : ", prevState);
        console.log("이전 props : ", prevProps);
    }
    // state나 props가 변경돼서 리렌더링이 끝난 후 실행 //리렌더링 : 리액트가 변경된 부분만 다시 그리는 것
    // React가 render → DOM 업데이트 → componentDidUpdate 순서로 실행
    // 변경 전의 상태/속성을 확인할 수 있음

    // prevProps, prevState는 React가 컴포넌트를 업데이트한 "후에" 자동으로 전달해주는 값.
    // 즉, 우리가 따로 저장해두는 게 아니라, React 내부에서 알아서:
    // 상태가 바뀌기 전의 값
    // props가 바뀌기 전의 값
    // 을 매개변수로 전달해주는 구조.

    // 컴포넌트가 언마운트 될 때 호출
    componentWillUnmount() {
        console.log("componentWillUnmount : 컴포넌트가 언마운트 됩니다.");
    }
    // 보통 타이머 해제, 이벤트 제거, 리소스 정리 등에 사용

    increment = () => {
        this.setState({ count: this.state.count + 1 });// 변경방법
    }

    /*
    render()
    - eact 컴포넌트의 UI(화면 구조)를 반환하는 메서드
    - HTML처럼 보이는 JSX 문법을 반환함
    - 클래스형 컴포넌트에서는 render()가 필수로 있어야 함
    - state나 props가 변경되면 render()는 자동으로 다시 실행됨

    this. -> 현재 클래스 인스턴스
    */
    render() {
        return (
            <div>
                <p>Count : {this.state.count}</p> {/*  현재 컴포넌트의 상태*/}
                <button onClick={this.increment}> 1증가 </button>
            </div>
        )
    }
}

export default LifecycleText