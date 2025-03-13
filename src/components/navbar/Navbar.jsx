// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./navbar.module.scss";
import listNavIcon from "../../assets/Header/imagem-fechar-header.png";
import avatarProfile from "../../assets/Header/avatarProfile.png";
import homeIcon from "../../assets/Header/bottonHome.png";
import reembolsoIcon from "../../assets/Header/bottonReembolso.png";
import analiseIcon from "../../assets/Header/bottonAnalise.png";
import histoticoIcon from "../../assets/Header/bottonHistórico.png";
import sairIcon from "../../assets/Header/bottonSair.png";

export default function Navbar() {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <header>
            <nav className={`${style.navbar}`}>
                <button
                    className={`${style.headerButton} ${style.openButton}`}
                    aria-label="Navegar para home"
                >
                    <img src={listNavIcon} alt="Expande e fecha lista de icones" loading="lazy" />
                </button>
                <picture>
                    <img src={avatarProfile} alt="Avatar do usuário" className={style.avatarProfile} loading="lazy" />
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
                            aria-label="Navegar para início"
                        >
                            <img src={`${homeIcon}`} alt="Ícone de início" loading="lazy" />
                        </button>
                        <p className={`${style.hidden}`} >
                            Inicio
                        </p>
                    </li>
                    <li>
                        <button
                            className={`${style.headerButton}`}
                            onClick={() => navigateTo('/reembolsos')}
                            aria-label="Navegar para reembolsos"
                        >
                            <img src={`${reembolsoIcon}`} alt="Ícone de reembolso" loading="lazy" />
                        </button>
                        <p className={`${style.hidden}`} >
                            Reembolsos
                        </p>
                    </li>
                    <li>
                        <button
                            className={`${style.headerButton}`}
                            onClick={() => navigateTo('/analise')}
                            aria-label="Navegar para análise"
                        >
                            <img src={`${analiseIcon}`} alt="Ícone de análise" loading="lazy" />
                        </button>
                        <p className={`${style.hidden}`} >
                            Análises
                        </p>
                    </li>
                    <li>
                        <button
                            className={`${style.headerButton}`}
                            onClick={() => navigateTo('/historico')}
                            aria-label="Navegar para histórico"
                        >
                            <img src={`${histoticoIcon}`} alt="Ícone de historico" loading="lazy" />
                        </button>
                        <p className={`${style.hidden}`} >
                            Histórico
                        </p>
                    </li>
                </ul>
                <button
                    className={`${style.logoutButton} ${style.headerButton}`}
                    onClick={() => navigateTo('/')}
                    aria-label="Encerrar sessão"
                >
                    <img src={`${sairIcon}`} alt="Ícone encerrar sessão" loading="lazy" />
                </button>
            </nav>
        </header>
    )
}