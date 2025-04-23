import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 8px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    border: 1px solid gray;
    border-radius: 16px;
`
const CommentText = styled.span`
    font-size: 18px;
`
//props로부터 데이터를 받아 댓글을 렌더링하는 컴포넌트
//<Comment message={"안녕하세요"}/>
class Comment extends Component {
    // 컴포넌트가 처음 만들어질 때 실행됨
    constructor(props){
        super(props)

        this.state = {}//초기값 설정
    }

    // componentDidMount(){//렌더링한후
    //     console.log(`${this.props.id}의 componentDidMount`)
    // }

    componentDidUpdate(){//리렌더링 한후
        console.log(`${this.props.id}의 componentDidUpdate`)
    }

    // componentWillUnmount(){//언마운트 한후
    //     console.log(`${this.props.id}의 componentWillUnmount`)
    // }

    //컴포넌트가 업데이트(리렌더링)(props나 state가 변경되었을 때) 되기 직전에 호출
    // shouldComponentUpdate(nextProps, nextState){
    //     // console.log(`${this.props.id}의 shouldComponentUpdate`)
    //     console.log(`${nextProps.id}의 shouldComponentUpdate`)
    //     console.log(`${nextState.id}의 shouldComponentUpdate`)
    //     //이 메서드는 props나 state가 바뀌었을 때 리렌더링할지 말지 결정
    //     return true;
    // }

    render() {
        return (
            <Container>
                <CommentText>
                    {this.props.message}
                </CommentText>
            </Container>
        )
    }
}

export default Comment