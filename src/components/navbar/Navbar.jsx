// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./navbar.module.scss";
import closeIcon from "../../assets/Header/imagem-fechar-header.png";
import avatarProfile from "../../assets/Header/avatarProfile.png";
import homeIcon from "../../assets/Header/bottonHome.png";
import reembolsoIcon from "../../assets/Header/bottonReembolso.png";
import analiseIcon from "../../assets/Header/bottonAnalise.png";
import histoticoIcon from "../../assets/Header/bottonHistórico.png";
import sairIcon from "../../assets/Header/bottonSair.png";

export default function Navbar() {
    // const [isExpanded, setIsExpanded] = useState(false);
    
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    const handleReembolso = () => {
        navigate('/reembolsos');
    }

    const handleAnalise = () => {
        navigate('/analise');
    }

    const handleHistorico = () => {
        navigate('/historico');
    }

    return (
        <header>
            <nav className={`${style.navbar}`}>
                <button
                    className={`${style.headerButton} ${style.openButton}`}
                >
                    <img src={closeIcon} alt="" loading="lazy" />
                </button>
                <picture>
                    <img src={avatarProfile} alt="" className={style.avatarProfile} loading="lazy" />
                    <h3 className={`${style.hidden}`}>
                        Dominick Silva
                    </h3>
                    <p className={`${style.hidden}`}>
                        Comércio Exterior
                    </p>
                </picture>
                <ul>
                    <li>
                        <button
                            className={`${style.headerButton}`}
                            >
                            <img src={`${homeIcon}`} alt="" loading="lazy" />
                        </button>
                        <p className={`${style.hidden}`} >
                            Inicio
                        </p>
                    </li>
                    <li>
                        <button
                            className={`${style.headerButton}`}
                            onClick={handleReembolso}
                            >
                            <img src={`${reembolsoIcon}`} alt="" loading="lazy" />
                        </button>
                        <p className={`${style.hidden}`} >
                            Reembolsos
                        </p>
                    </li>
                    <li>
                        <button
                            className={`${style.headerButton}`}
                            onClick={handleAnalise}
                        >
                            <img src={`${analiseIcon}`} alt="" loading="lazy" />
                        </button>
                        <p className={`${style.hidden}`} >
                            Análises
                        </p>
                    </li>
                    <li>
                        <button
                            className={`${style.headerButton}`}
                            onClick={handleHistorico}
                        >
                            <img src={`${histoticoIcon}`} alt="" loading="lazy" />
                        </button>
                        <p className={`${style.hidden}`} >
                            Histórico
                        </p>
                    </li>
                </ul>
                <button
                    className={`${style.logoutButton} ${style.headerButton}`}
                    onClick={handleLogout}
                >
                    <img src={`${sairIcon}`} alt="" loading="lazy" />
                </button>
            </nav>
        </header>
    )
}