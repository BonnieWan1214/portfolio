import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProjectCocktail from './pages/ProjectCocktail.jsx'
import ProjectSocialCampaign from './pages/ProjectSocialCampaign.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import ProjectWork01 from './pages/ProjectWork01.jsx'
import ProjectWork02 from './pages/ProjectWork02.jsx'
import ProjectWork05 from './pages/ProjectWork05.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/ux-ui" element={<ProjectWork01 />} />
        <Route path="/work/sporkshare" element={<ProjectWork02 />} />
        <Route path="/work/cocktail-packaging" element={<ProjectCocktail />} />
        <Route path="/work/social-media-campaign" element={<ProjectSocialCampaign />} />
        <Route path="/work/shopee-mothers-day" element={<ProjectWork05 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
