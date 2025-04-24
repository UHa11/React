import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound'
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'
import UserRegistration from './pages/UserRegistration'
import { UserProvider } from './pages/UserContext'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <UserProvider>
      <nav style={{marginBottom: 20}}>
        {/* Link:a태그와 동일한 역할을 하지만 react-router-dom을 활용해 spa방식으로 자연스럽게 화면 전환 */}
        <Link to="/" style={{marginRight: 12}}>유저 목록 페이지</Link> 
        <Link to="/user">유저 등록 페이지</Link>
      </nav>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/user/:id' element={<UserDetail/>}/>
        <Route path='/user' element={<UserRegistration/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
