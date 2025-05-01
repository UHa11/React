import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();

  const getBoards = async () => {
    const res = await axios.get('http://localhost:3001/boards');
    setBoards(res.data);
  };

  useEffect(() => {
    getBoards();
  });

  const onBoardDetail = (board) => {
    navigate(`/detail/${board}`);
  };
  return (
    <Ul>
      {boards.map((board, index) => (
        <Li key={index + 1} onClick={() => onBoardDetail(board)}>
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
