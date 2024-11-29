// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';  

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>  {/* Envolva o App com o BrowserRouter */}
      <App />
  </React.StrictMode>
);

// Relatório de métricas de desempenho
reportWebVitals();
