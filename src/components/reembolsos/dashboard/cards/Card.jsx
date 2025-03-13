import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './card.module.scss';

export default function Card({ image, description, title }) {

    const navigate = useNavigate();

    const handleSolicitacao = () => {
        navigate('/solicitacao');
    };
    return (
        <div className={`${style.card}`} onClick={handleSolicitacao}>
            <img src={image} alt={description} />
            <h4>
                {title}
            </h4>
        </div>
    );
}