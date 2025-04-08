import React from 'react';
import style from './breadcrumb.module.scss';
import arrowRight from '../../assets/Dashboard/arrowRight.png';
import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';

export default function Breadcrumb({title1, title2, image, className}) {
    return (
        <span className={style.breadcrumb}>
            <img src={vectorHomeIndice} alt="casa pequena" />
            <img src={arrowRight} alt="seta pra direita" />
            <p>{title1}</p>
            <img
                src={image}
                alt="seta pra direita"
                className={className}
            />
            <p>{title2}</p>
        </span>
    );
}