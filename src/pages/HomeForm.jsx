import React from 'react';
import BoardList from '../components/BoardList';
import styled from 'styled-components';

const HomeForm = () => {
  const loginUser = JSON.parse(localStorage.getItem('loginUser'));
  return (
    <div>
      <h2>게시판</h2>
      {loginUser && (
        <ButtonBox>
          <button>글쓰기</button>
        </ButtonBox>
      )}
      <BoardList />
    </div>
  );
};

export default HomeForm;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
