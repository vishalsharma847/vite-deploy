import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter basename={import.meta.env.BASE_URL}> */}
    <BrowserRouter basename='/vite-deploy/'>
    <Routes>
     <Route path="/" element={<App />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
