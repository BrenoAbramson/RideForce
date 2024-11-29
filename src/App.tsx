// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Capacetes from './pages/Capacetes'; 
import Jaquetas from './pages/Jaquestas';
import Luvas from './pages/Luvas';
import Botas from './pages/Botas';
import Pneus from './pages/Pneus';
import Testar from './pages/Testar';
import Detalhes from './pages/Detalhes';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/Capacetes" element={<Capacetes />} />  
        <Route path="/Jaquetas" element={<Jaquetas />} />  
        <Route path="/Luvas" element={<Luvas />} />  
        <Route path="/Botas" element={<Botas />} />  
        <Route path="/Pneus" element={<Pneus />} /> 
        <Route path="/Testar" element={<Testar />} />
        <Route path="/Detalhes/:id/:categorias" element={<Detalhes />} />
        <Route path="/Carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
