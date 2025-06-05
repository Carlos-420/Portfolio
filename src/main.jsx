import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Tecnologies from './Tecnologies.jsx'
import Projects from './Projects.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
      <App />
      <Projects />
    <Tecnologies />
  </StrictMode>,
)
