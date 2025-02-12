// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Reembolsos from "./components/reembolsos/Reembolsos.jsx";
import Solicitacao from './components/solicitacao/Solicitacao.jsx';
import Analise from "./components/analise/Analise.jsx";
import Historico from "./components/historico/Historico.jsx";
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