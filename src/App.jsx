import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import PostListPage from './page/PostListPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
      </Routes>
    </Router>
  )
}

export default App