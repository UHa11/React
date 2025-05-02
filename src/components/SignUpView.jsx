import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  id: yup.string().required('아이디를 입력하세요'),
  name: yup.string().required('이름을 입력하세요'),
  age: yup.number().min(13),
  phone: yup.number().min(10).max(11),
  // email: yup.string().email('유효한 이메일 형식이 아닙니다.').required('이메일을 입력하세요'),
  pwd: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .matches(/^(?=.*[a-zA-Z]).{5,}$/, '비밀번호는 영문자를 포함해 5자 이상이어야 합니다.'),
  sPwd: yup.string().oneOf([yup.ref('pwd')], '비밀번호가 일치하지 않습니다'),
});

const SignUpView = () => {
  const navigate = useNavigate();
  const { searchId, setSearchId } = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (searchId) {
      try {
        const { sPwd, ...userData } = data;
        await axios.post('http://localhost:8080/api/users', userData);
        navigate('/login');
      } catch (err) {
        console.error('회원가입 실패:', err);
        alert('회원가입 실패');
      }
    } else {
      alert('아이디 중복 체크를 해주세요.');
    }
  };

  const onSearchId = () => {
    const res = axios.get('http://localhost:3001/users');
    const users = res.data;

    const foundUser = users.some((user) => user.id === data.id);
    //some => "조건에 맞는 게 하나라도 있는지?" 검사
    if (foundUser) {
      setError('id', {
        type: 'manual',
        message: '이미 사용 중인 아이디입니다.',
      });
    } else {
      setSearchId(true);
      alert('사용가능한 아이디 입니다.');
    }
  };
  const onChangeId = () => {
    setSearchId(false);
  };

  return (
    <form onSubmit={() => handleSubmit(onSubmit)}>
      <ul>
        <li>아이디</li>
        <input type="text" onChange={() => onChangeId()} {...register('id')} />
        {errors.id && <p>{errors.id.message}</p>}
        <button onClick={onSearchId}>중복확인</button>
        <li>비밀번호</li>
        <input type="text" {...register('pwd')} />
        {errors.pwd && <p>{errors.pwd.message}</p>}
        <li>비밀번호 확인</li>
        <input type="text" {...register('sPwd')} />
        {errors.sPwd && <p>{errors.sPwd.message}</p>}
        <li>이름</li>
        <input type="text" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
        <li>나이</li>
        <input type="text" {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}
        <li>폰 번호</li>
        <input type="text" {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </ul>
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignUpView;
