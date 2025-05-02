import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
  id: yup.string().required('아이디를 입력하세요'),
  pwd: yup.string().required('비밀번호를 입력해주세요'),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSingUp = () => {
    navigate(`/signUp`);
  };
  const onSearchIdPwd = () => {
    navigate(`/searchIdPwd`);
  };

  const onSubmit = async (data) => {
    const res = await axios.get('http://localhost:3001/users');
    const users = res.data;

    const foundUser = users.find((user) => user.id === data.id);
    if (foundUser) {
      localStorage.setItem('loginUser', JSON.stringify({ id: foundUser.id, pwd: foundUser.pwd }));
      navigate(`/`);
    } else {
      setError('id', {
        type: 'manual',
        message: '잘못된 아이디 입니다.',
      });
      setError('pwd', {
        type: 'manual',
        message: '잘못된 비밀번호 입니다.',
      });
    }
  };

  return (
    <LoginContainer onSubmit={() => handleSubmit(onSubmit)}>
      <h2>로그인</h2>
      <ul>
        <li>아이디</li>
        <input type="text" {...register('id')} />
        {errors.id && <p>{errors.id.message}</p>}
        <li>비밀번호</li>
        <input type="text" {...register('pwd')} />
        {errors.pwd && <p>{errors.pwd.message}</p>}
      </ul>
      <button type="submit">로그인</button>
      <button onClick={onSingUp}>회원 가입</button>
      <button onClick={onSearchIdPwd}>아이디/비번 찾기</button>
    </LoginContainer>
  );
};

export default LoginForm;

const LoginContainer = styled.form`
  box-shadow: 0 0 8px hotpink;
`;
