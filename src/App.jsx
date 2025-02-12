import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Reembolsos from "./components/reembolsos/Reembolsos";
import Solicitacao from './components/solicitacao/Solicitacao';
import Analise from "./components/analise/Analise";
import Historico from "./components/historico/Historico";
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