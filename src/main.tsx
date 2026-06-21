import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LeonixApp } from './Leonix.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
{/** Se envuelve la app en BroserRouter para usar React router y tener rutas*/}
    <BrowserRouter>
      <LeonixApp />
    </BrowserRouter>
  </StrictMode>,
)
