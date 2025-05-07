import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//
const schema = yup.object().shape({
  id: yup.string().required('아이디를 입력하세요'),
  name: yup.string().required('이름을 입력하세요'),
  age: yup.string().matches(/^\d{8}$/, '주민번호 앞 8자리를 입력해 주세요'),
  phone: yup.string().matches(/^01[016789]-\d{3,4}-\d{4}$/, '휴대폰 번호 형식을 맞춰주세요'),
  // email: yup.string().email('유효한 이메일 형식이 아닙니다.').required('이메일을 입력하세요'),
  pwd: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .matches(/^(?=.*[a-zA-Z])(?=.*\d).{5,}$/, '영문자와 숫자를 포함해 5자 이상 입력해주세요.'),
  sPwd: yup.string().oneOf([yup.ref('pwd')], '비밀번호가 일치하지 않습니다'),
});
//(?=.*[a-zA-Z]) -> 영문자 하나이상 포함 / ^ ->시작 / $ -> 끝 / \d -> 숫자
//
const SignUpView = () => {
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //
  const userId = watch('id');
  useEffect(() => {
    console.log('searchId 바뀜:', searchId);
  }, [searchId]);
  useEffect(() => {
    setSearchId(false);
  }, [userId]);
  //
  const onSearchId = async () => {
    try {
      const res = await axios.get('http://localhost:3001/users');
      const users = res.data;
      if (!userId) {
        setError('id', {
          type: 'manual',
          message: '아이디를 입력하세요.',
        });
        return;
      }

      const pattern = /^(?=.*[a-zA-Z])(?=.*\d).{5,}$/;
      if (!pattern.test(userId)) {
        setError('id', {
          type: 'manual',
          message: '영문자+숫자 포함 5자 이상 입력해주세요.',
        });
        return;
      }
      // .match()는 매칭되면 배열, 아니면 null → 조건식에서 헷갈릴 수 있음
      // 조건 검사 목적이면 .test() 쓰는 게 정확하고 실수 없음

      const foundUser = users.some((user) => user.id === userId);
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
    } catch (err) {
      console.error('아이디 중복 검사 실패:', err);
      alert('중복 검사 중 오류가 발생했습니다.');
    }
  };
  //
  const onSubmit = async (data) => {
    if (!searchId) {
      setError('id', {
        type: 'manual',
        message: '중복체크 해주세요',
      });
      return;
    }

    try {
      const userData = {
        id: data.id,
        pwd: data.pwd,
        name: data.name,
        age: data.age,
        phone: data.phone,
      };
      await axios.post('http://localhost:3001/users', userData);
      //json server는 api 없이 접근
      alert('회원가입 완료!');
      navigate('/login');
    } catch (err) {
      console.error('회원가입 실패:', err);
      alert('회원가입 실패');
    }
  };
  //
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <li>아이디</li>
        <input type="text" placeholder="영문자+숫자 포함 5자 이상" {...register('id')} />
        <button type="button" onClick={onSearchId}>
          중복확인
        </button>
        {errors.id && <p>{errors.id.message}</p>}
        <li>비밀번호</li>
        <input type="text" placeholder="영문자+숫자 포함 5자 이상" {...register('pwd')} />
        {errors.pwd && <p>{errors.pwd.message}</p>}
        <li>비밀번호 확인</li>
        <input type="text" {...register('sPwd')} />
        {errors.sPwd && <p>{errors.sPwd.message}</p>}
        <li>이름</li>
        <input type="text" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
        <li>나이</li>
        <input type="text" placeholder="주민번호 앞8자리" {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}
        <li>폰 번호</li>
        <input type="text" {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </ul>
      <button type="submit">회원가입</button>
    </form>
  );
};
//
export default SignUpView;
