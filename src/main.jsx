import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from './pages/Principal.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>

          {/*Rutas de mi landing*/}
          
            {/*<Route path="/" element={<Principal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/equipo" element={<ArmarEquipo />} />
            <Route path="/pokemon/:pokemonId/:equipoId" element={<PaginaPokemonEquipo />} />
            <Route path="/pokemon/:pokemon" element={<PaginaPokemonEquipo />} />
            <Route path="/detalle/:equipoId" element={<DetallePokemon />} />
            <Route path="/usuario/lista" element={<AdminUser />} />
            <Route path="/pokemon/lista" element={<AdminPokemon />} />
            <Route path="/habilidades/lista" element={<AdminHabilidades />} />
            <Route path="/items/lista" element={<AdminItems />} />
            <Route path="/movimientos/lista" element={<AdminMovimientos />} />*/}
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
