import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const IconButtons = () => {
  return (
    <Wrapper>
      <Title>
        <FaArrowLeft />
        아이콘 버튼
      </Title>

      <Button color="y">
        <FaEdit />
        수정
      </Button>
      <Button color="gray">
        <MdDelete />
        삭제
      </Button>
    </Wrapper>
  );
};

export default IconButtons;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background-color: ${({ color }) => color || color};
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
