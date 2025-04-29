import styled from 'styled-components'
import './App.css'
import CounterDisplay from './Components/CounterDisplay'
import CounterContreols from './Components/CounterContreols'
import TodoList from './Components/TodoList'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  padding: 24px;
  text-align: center;
  transition: all 0.3s;
`
const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 18px;
  border-radius: 8px;
  margin-bottom: 20px;
`
function App() {

  return (
    <AppContainer>
      <Section>
        <h2>zustand 전역 상태 관리</h2>
        <CounterDisplay />
        <CounterContreols/>
      </Section>
      <Section>
        <h2>zustand TodoList</h2>
        <TodoList/>
      </Section>
    </AppContainer>
  )
}

export default App
