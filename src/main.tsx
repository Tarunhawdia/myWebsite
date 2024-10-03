import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import BackgroundVideo from './subHeadings/BackgroundVideo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BackgroundVideo/> */}
    <App />
  </StrictMode>,
)
