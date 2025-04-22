import React, { Component } from 'react';
import Comment from './Comment';

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
      commentList: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { commentList } = this.state;

      if (commentList.length < serverComments.length) {
        const nextComment = serverComments[commentList.length];

        this.setState({
          commentList: [...commentList, nextComment],
        });
      } else {
        this.setState({
          commentList: [],
        });
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // 컴포넌트가 언마운트될 때 interval 정리
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