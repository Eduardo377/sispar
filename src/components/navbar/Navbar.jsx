import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./navbar.module.scss";
import listNavIcon from "../../assets/Header/imagem-fechar-header.png";
import avatarProfile from "../../assets/Header/avatarProfile.png";
import homeIcon from "../../assets/Header/bottonHome.png";
import reembolsoIcon from "../../assets/Header/bottonReembolso.png";
import analiseIcon from "../../assets/Header/bottonAnalise.png";
import historicoIcon from "../../assets/Header/bottonHistórico.png";
import sairIcon from "../../assets/Header/bottonSair.png";

const menuItems = [
    { path: "/home", icon: homeIcon, label: "Início" },
    { path: "/reembolsos", icon: reembolsoIcon, label: "Reembolsos" },
    { path: "/analise", icon: analiseIcon, label: "Análises" },
    { path: "/historico", icon: historicoIcon, label: "Histórico" },
];

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleNavbar = () => setIsExpanded(!isExpanded);
    const navigateTo = (path) => navigate(path);

    const handleLogout = () => {
        if (window.confirm("Tem certeza que deseja sair?")) {
            navigate("/");
        }
    };

    return (
        <header className={isExpanded ? style.expanded : style.collapsed}>
            <nav className={style.navbar}>
                <button
                    className={style.headerButton}
                    onClick={toggleNavbar}
                    aria-label={isExpanded ? "Recolher menu" : "Expandir menu"}
                >
                    <img src={listNavIcon} alt="Ícone de menu" loading="lazy" />
                </button>

                <div className={style.container}>
                    <picture>
                        <img src={avatarProfile} alt="Avatar do usuário" className={style.avatarProfile} loading="lazy" />
                        <h3 className={isExpanded ? style.visible : style.hidden}>Dominick Silva</h3>
                        <p className={isExpanded ? style.visible : style.hidden}>Comércio Exterior</p>
                    </picture>

                    <ul>
                        {menuItems.map(({ path, icon, label }) => (
                            <li key={path}>
                                <button
                                    className={style.headerButton}
                                    onClick={() => navigateTo(path)}
                                    aria-label={`Navegar para ${label}`}
                                    aria-current={location.pathname === path ? "page" : undefined}
                                >
                                    <img src={icon} alt={`Ícone de ${label}`} loading="lazy" />
                                </button>
                                <p className={isExpanded ? style.visible : style.hidden}>{label}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className={`${style.logoutButton}`}
                    onClick={handleLogout}
                    aria-label="Encerrar sessão"
                >
                    <img src={sairIcon} alt="Ícone de sair" loading="lazy" />
                </button>
            </nav>
        </header>
    );
}