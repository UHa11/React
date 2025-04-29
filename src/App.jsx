import styled from 'styled-components'
import './App.css'
import CounterDisplay from './Components/CounterDisplay'
const AppContainer = styled.div`
  
`
const Section = styled.section`
  width: 100%;
`
function App() {

  return (
    <AppContainer>
      <Section>
        <h2>zustand 전역 상태 관리</h2>
        <CounterDisplay />
      </Section>
    </AppContainer>
  )
}

export default App
