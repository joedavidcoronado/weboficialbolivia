import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';

import HomePage from './pages/HomePage.jsx';
import IdentityPage from './pages/IdentityPage.jsx';
import FloatingWhatsapp from './components/FloatingWhatsapp.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BeliefsPage from './pages/BeliefsPage.jsx';
import ActionsPage from './pages/ActionsPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import PresentPage from './pages/PresentPage.jsx';
import ConditionsPage from './pages/ConditionsPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';

AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <FloatingWhatsapp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/identidad" element={<IdentityPage />} />
        <Route path="/creencias" element={<BeliefsPage />} />
        <Route path="/condiciones" element={<ConditionsPage />} />
        <Route path="/acciones" element={<ActionsPage />} />
        <Route path="/contacto" element={<ContactsPage />} />
        <Route path="/actualidad" element={<PresentPage />} />
        <Route path="/recursos" element={<ResourcesPage />} />
      </Routes>
    <Footer />  
    </BrowserRouter>
  </StrictMode>
)
