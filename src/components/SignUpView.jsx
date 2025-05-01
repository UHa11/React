import React from 'react';

const SignUpView = () => {
  return (
    <div>
      <ul>
        <li>아이디</li>
        <input type="text" />
        <li>비밀번호</li>
        <input type="text" />
        <li>비밀번호 확인</li>
        <input type="text" />
        <li>폰 번호</li>
        <input type="text" />
      </ul>
      <button>회원가입</button>
    </div>
  );
};

export default SignUpView;
