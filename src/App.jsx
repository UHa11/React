import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import PostListPage from './page/PostListPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* 메인화면 */}
        <Route path="/posts" element={<PostListPage />} />
        {/* 게시글목록 페이지 */}
      </Routes>
    </Router>
  )
}

export default App