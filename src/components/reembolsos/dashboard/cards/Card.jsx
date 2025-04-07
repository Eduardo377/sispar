import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './card.module.scss';

import solicitarReeembolso from '../../../../assets/Dashboard/solicitarReembolso.png'
import solicitarAnalise from '../../../../assets/Dashboard/solicitarAnálises.png';
import solicitarHistorico from '../../../../assets/Dashboard/solicitarHistórico.png';

export default function Card() {

    const navigate = useNavigate();

    const handleSolicitacao = () => {
        navigate('/solicitacao');
    };

    const handleAnalise = () => {
        navigate('/analise');
    };

    const handleHistorico = () => {
        navigate('/historico');
    };

    return (
        <div className={`${style.cardsContainer}`}>
            <div className={`${style.card}`} onClick={handleSolicitacao}>
                <img src={solicitarReeembolso} alt="icone de solicitar reembolso" />
                <h4>
                    Solicitar Reembolso
                </h4>
            </div>
            <div className={`${style.card}`} onClick={handleAnalise}>
                <img src={solicitarAnalise} alt="icone analise" />
                <h4>
                    Verificar análises
                </h4>
            </div>
            <div className={`${style.card}`} onClick={handleHistorico}>
                <img src={solicitarHistorico} alt="icone historico" />
                <h4>
                    "Histórico"
                </h4>
            </div>
        </div >
    );
}