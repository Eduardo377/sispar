import React from 'react';
import style from './breadcrumb.module.scss';
import vectorHomeIndice from '../../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../../assets/Dashboard/arrowRight.png';

export default function Breadcrumb() {
    return (
        <span className={style.breadcrumb}>
            <img src={vectorHomeIndice} alt="casa pequena" />
            <img src={arrowRight} alt="seta pra direita" />
            <p>Reembolso</p>
            <img src={arrowRight} alt="seta pra direita" />
            <p>Solicitação de Reembolso</p>
        </span>
    );
}