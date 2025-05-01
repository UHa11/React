import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeForm from './pages/HomeForm';
import LoginForm from './pages/LoginForm';
import NotFound from './pages/NotFound';
import BoardForm from './pages/BoardForm';

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);
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
          <Route path="/login" element={<BoardForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
