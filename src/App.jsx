// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Reembolsos from "./pages/reembolsos/Reembolsos.jsx";
import Solicitacao from './pages/solicitacao/solicitacao.jsx';
import Analise from "./pages/analise/Analise.jsx";
import Historico from "./pages/historico/historico.jsx";
import './global.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reembolsos" element={<Reembolsos />} />
        <Route path="/solicitacao" element={<Solicitacao />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </Router>
  )
}