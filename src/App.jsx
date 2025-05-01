import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeForm from './pages/HomeForm';
import LoginForm from './pages/LoginForm';
import NotFound from './pages/NotFound';
import BoardDetail from './components/BoardDetail';
import SignUpView from './components/SignUpView';
import SearchIdPwdView from './components/SearchIdPwdView';

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);

  return (
    <>
      <BrowserRouter>
        <useProvider>
          <nav style={{ marginBottom: 20 }}>
            <Link to="/" style={{ marginRight: 12 }}>
              Home
            </Link>
            <Link to="/login" style={{ marginRight: 12 }}>
              Login
            </Link>
          </nav>
          <Routes>
            <Route path="/:id" element={<HomeForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signUp" element={<SignUpView />} />
            <Route path="/searchIdPwd" element={<SearchIdPwdView />} />
            <Route path="/detail/:board" element={<BoardDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </useProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
