import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeForm from './pages/HomeForm';
import LoginForm from './pages/LoginForm';
import NotFound from './pages/NotFound';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);
  const [setInformation] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then((res) => setInformation(res.data))
      .catch((err) => console.error('에러:', err));
  }, []);
  return (
    <>
      <BrowserRouter>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 12 }}>
            Home
          </Link>
          <Link to="/login" style={{ marginRight: 12 }}>
            Login
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomeForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
