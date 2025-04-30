// import { ThemeProvider } from 'styled-components';
import './App.css';
import TodoList from './components/TodoList';
// import GlobalStyle from './GlobalStyle';
// import { useState } from 'react';
// import { darkTheme, lightTheme } from './themes';
// import ThemeBox from './components/ThemeBox';
// import { ToastContainer } from 'react-toastify';
// import { performToast } from './utils/performToast';
// import SimpleForm from './components/SimpleForm';
// import IconButtons from './components/IconButtons'

// toast.success('요청에 성공하였습니다.');
// toast.error('요청에 실패');
// toast.warning('요청이 올바르지않음.');
// performToast({ msg: '등록완료', type: 'success' });
// performToast({ msg: '요청에 실패', type: 'error' });
// performToast({ msg: '요청이 올바르지않음', type: 'warning' });

function App() {
  // const [isDark, setIsDark] = useState(false);
  // const toggleTheme = () => setIsDark(!isDark);

  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);

  return (
    <>
      {/* <IconButtons/> */}
      {/* <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ThemeBox onToggleTheme={toggleTheme} />
      </ThemeProvider> */}
      {/* <ToastContainer /> */}
      {/* <SimpleForm /> */}
      {/* <LoaderDemo /> */}
      <TodoList />
    </>
  );
}

export default App;
