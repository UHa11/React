import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useBoardsStore from '../store/useBoardsStore';

const BoardList = () => {
  const { boardList, setBoardList } = useBoardsStore();
  const navigate = useNavigate();

  useEffect(() => {
    setBoardList(); // 이게 있어야 API 요청이 발생함
  }, [setBoardList]);

  const onBoardDetail = (boardId) => {
    console.log(boardId);
    navigate(`/detail/${boardId}`);
  };
  return (
    <Ul>
      {boardList.map((board, index) => (
        <Li key={board.boardId} onClick={() => onBoardDetail(board.boardId)}>
          <div>{index + 1}</div>|<div>제목: {board.title}</div>|<div>작성자:{board.name}</div>
        </Li>
      ))}
    </Ul>
  );
};

export default BoardList;

const Ul = styled.ul`
  list-style: none;
  text-align: left;
`;

const Li = styled.li`
  display: grid;
  grid-template-columns: 0.2fr repeat(2, 0.1fr 1fr);
  gap: 10px;
`;
