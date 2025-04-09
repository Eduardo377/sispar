import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Analise from "./pages/analise/Analise.jsx";
import Historico from "./pages/historico/historico.jsx";
import CriarConta from "./pages/criarConta/CriarConta.jsx"
import Reembolsos from "./pages/reembolsos/Reembolsos.jsx";
import Solicitacao from './pages/solicitacao/solicitacao.jsx';
import './global.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/criarlogin" element={<CriarConta />} />
        <Route path="/reembolsos" element={<Reembolsos />} />
        <Route path="/solicitacao" element={<Solicitacao />} />
      </Routes>
    </Router>
  )
}