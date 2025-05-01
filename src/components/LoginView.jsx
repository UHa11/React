import React from 'react'
import { LoginContainer } from './styled/login'

const LoginView = () => {
  return (
    <LoginContainer>
        <h2>로그인</h2>
        <ul>
          <li>아이디</li>
          <input type="text" />
          <li>비밀번호</li>
          <input type="text" />
        </ul>
    </LoginContainer>
  )
}

export default LoginView