import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './page/HomePage'
import PostListPage from './page/PostListPage'
import PostList from './components/PostList'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/posts' element={<PostListPage/>}/>
        <Route path='/posts' element={<PostList/>}/>
      </Routes>
    </Router>
  )
}

export default App
