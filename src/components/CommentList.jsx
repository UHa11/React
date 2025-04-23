import React, { Component } from 'react';
import Comment from './Comment';

 //서버에서 가져왔다고 가정한 댓글목록들
const serverComments = [
  {
    id: 1,
    message: '안녕하세요. 최지원입니다.',
  },
  {
    id: 2,
    message: '이제 여름이 시작하나요?',
  },
  {
    id: 3,
    message: '냉면먹고 싶습니다.',
  },
];
// Comment 컴포넌트를 활용해 3초마다 댓글 하나씩 추가해서 보여주는 기능
class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [] //commentList: 화면에 표시할 댓글 목록
    };
  }
  componentDidMount() {
    //this.interval = setInterval(); -> 타이머 아이디 저장
    //setInterval()의 반환값을 저장을 해야 아래에서 타이머를 멈추는 작동을 할 수 있음.
    this.Interval = setInterval(() => {
      const { commentList } = this.state;
      // 현재 state에 있는 commentList를 가져와서 쓸것이다.
      //const commentList = this.state.commentList; -> 같은것

      if (commentList.length < serverComments.length) {
        const nextComment = serverComments[commentList.length];
        //처음은 0
        this.setState({
          commentList: [...commentList, nextComment],
        }); 
        //...commentList는 배열 복사 (spread 문법) //기존배열
        //[기존 배열, 새로운 값]; -> 기존배열 뒤에 새로운 값을 추가한 것을 State에 저장

      } else {
        this.setState(
          {commentList: []} //초기화
        );
        console.clear();
      }
    }, 3000); 
    //setInterval()을 이용해서 3초마다 반복 동작 실행
    //setInterval() 함수는 자바스크립트에서 일정한 시간 간격으로 어떤 작업을 계속 반복하게 해주는 함수
    //setInterval(함수, 지연시간ms);
  }

  componentWillUnmount() {
    clearInterval(this.Interval); // 컴포넌트가 언마운트될 때 interval 정리
  }

  render() {
    const { commentList } = this.state;

    return (
      <div>
        {commentList.map((c) => (
          <Comment
            key={c.id}
            id={c.id}
            message={c.message}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;