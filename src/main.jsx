import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';

import HomePage from './pages/HomePage.jsx';
{/*import ActionsPage from './pages/ActionsPage.jsx';
import BeliefsPage from './pages/BeliefsPage.jsx';
import ConditionsPage from './pages/ConditionsPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import IdentityPage from './pages/IdentityPage.jsx';
import PresentPage from './pages/PresentPage.jsx';*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/acciones" element={<ActionsPage />} />
        <Route path="/creencias" element={<BeliefsPage />} />
        <Route path="/condiciones" element={<ConditionsPage />} />
        <Route path="/contacto" element={<ContactsPage />} />
        <Route path="/identidad" element={<IdentityPage />} />
        <Route path="/actualidad" element={<PresentPage />} />*/}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
