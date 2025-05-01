import React from 'react';
import BoardList from '../components/BoardList';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const HomeForm = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시판</h2>
      {id && (
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
