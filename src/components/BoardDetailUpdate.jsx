import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBoardsStore from '../store/useBoardsStore';
// import useUserStore from '../store/useUserStore';

const BoardDetail = () => {
  //   const { loginUser } = useUserStore();
  const { boardId } = useParams();
  const { boardList, setBoardList } = useBoardsStore();
  const [board, setBoard] = useState(null);

  // 게시글 목록을 처음 한 번만 불러오기
  useEffect(() => {
    setBoardList();
  }, [setBoardList]);

  // boardList가 바뀔 때 해당 boardId 찾기
  useEffect(() => {
    if (boardList.length === 0) return;

    const found = boardList.find((b) => b.boardId === boardId);
    setBoard(found);
  }, [boardList, boardId]);

  return (
    // 비동기로 데이터를 받아올 땐 반드시 "존재 여부 검사" 후 접근해야 한다!
    <div>
      {board ? (
        <>
          <input type="text" value={board.title} />
          <p>작성자: {board.name}</p>
          <input type="text" value={board.body} />
        </>
      ) : (
        <p>게시글을 찾을 수 없습니다.</p>
      )}
      <button>완료</button>
    </div>
  );
};

export default BoardDetail;
