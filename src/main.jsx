import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { InterviewProvider } from './context/InterviewContext.jsx'
import { GlobalStyle } from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <InterviewProvider> 
      <GlobalStyle />
      <App />
    </InterviewProvider>
  </StrictMode>,
)
