import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './home.module.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import vectorHomeIndice from '../../assets/Dashboard/vectorHomeIndice.png';
import arrowRight from '../../assets/Dashboard/arrowRight.png';

export default function Home() {
    return (

        <div
            className={`${style.body}`}
        >
            <Navbar />

            <main className={style.main}>
                <section>
                    <span>
                        <img src={vectorHomeIndice} alt="casa pequena" />
                        <img src={arrowRight} alt="seta pra direita" />
                        <p>Home</p>
                    </span>
                </section>
            </main>
        </div>
    )
}