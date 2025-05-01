import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    const res = await axios.get('http://localhost:3001/users');
    setUsers(res.data);
  };

  const onLogin = () => {};
  const onSingUp = () => {
    navigate(`/signUp`);
  };
  const onSearchIdPwd = () => {
    navigate(`/searchIdPwd`);
  };
  return (
    <LoginContainer>
      <h2>로그인</h2>
      <ul>
        <li>아이디</li>
        <input type="text" />
        <li>비밀번호</li>
        <input type="text" />
      </ul>
      <button onClick={onLogin}>로그인</button>
      <button onClick={onSingUp}>회원 가입</button>
      <button onClick={onSearchIdPwd}>아이디/비번 찾기</button>
    </LoginContainer>
  );
};

export default LoginForm;

const LoginContainer = styled.div`
  box-shadow: 0 0 8px hotpink;
`;
