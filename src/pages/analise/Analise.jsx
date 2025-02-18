import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './analise.module.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../assets/Dashboard/arrowRight.png';

export default function Solicitacao() {
    return (

        <div
            className={`${style.body}`}
        >
            <Navbar />

            <main className={style.main}>
                <section>
                    <span>
                        <img src={vectorHomeIndice} alt="" />
                        <img src={arrowRight} alt="" />
                        <p>Reembolso</p>
                        <img src={arrowRight} alt="" />
                        <p>Análises</p>
                    </span>
                </section>
            </main>
        </div>
    )
}