import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  const getBoards = async () => {
    const res = await axios.get('http://localhost:3001/users');
    setBoards(res.data);
  };

  useEffect(() => {
    getBoards();
  });

  return (
    <div>
      <h2>게시판</h2>
      <ul>
        {boards.map((board, index) => (
          <li key={board.id}>
            {index + 1}.(제목: {board.title}) (작성자:{board.name})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;
