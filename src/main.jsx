import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProjectCocktail from './pages/ProjectCocktail.jsx'
import ProjectSocialCampaign from './pages/ProjectSocialCampaign.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/cocktail-packaging" element={<ProjectCocktail />} />
        <Route path="/work/social-media-campaign" element={<ProjectSocialCampaign />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
