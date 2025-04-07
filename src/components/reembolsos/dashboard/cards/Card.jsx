import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './card.module.scss';

import solicitarReeembolso from '../../../../assets/Dashboard/solicitarReembolso.png'
import solicitarAnalise from '../../../../assets/Dashboard/solicitarAnálises.png';
import solicitarHistorico from '../../../../assets/Dashboard/solicitarHistórico.png';

const menuItems = [
    { path: "/solicitacao", label: "solicitacao", image: solicitarReeembolso, alt: "icone de solicitar reembolso", title: "Solicitar Reembolso" },
    { path: "/analise", label: "Análises", image: solicitarAnalise, alt: "icone analise", title: "Verificar análises" },
    { path: "/historico", label: "Histórico", image: solicitarHistorico, alt: "icone historico", title: "Histórico" },
];

export default function Card() {

    const navigate = useNavigate();

    return (
        <div className={style.cardsContainer}>
            {menuItems.map(({ path, image, alt, title }) => (
                <div
                    key={path}
                    className={style.card}
                    onClick={() => {
                        navigate(path);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && navigate(path)}
                >
                    <img src={image} alt={alt} />
                    <h4>{title}</h4>
                </div>
            ))}
        </div>
    );
}