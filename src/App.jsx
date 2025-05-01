import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 12 }}>
            Home
          </Link>
          <Link to="/login" style={{ marginRight: 12 }}>
            로그인
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
