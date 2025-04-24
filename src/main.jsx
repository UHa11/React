import { StrictMode } from 'react' // 콘솔 두번뜬다.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
