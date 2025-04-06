// import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Tela-Login/logo-ws.png'
import style from './login.module.scss'

import Forms from '../../components/login/forms/Forms.jsx';

export default function Login() {

    return (
        <main>
            <section id={style['backgroundNavio']}>
            </section>
            <section className={style.sectionLogin}>
                <article>
                <img src={logo} alt="Logo do Sistema SISPAR" />
                    <div id={style['containerTitle']}>
                        <h1>
                            Boas vindas ao Novo Portal SISPAR
                        </h1>
                        <p>
                            Sistema de Emissão de Boletos e Parcelamento
                        </p>
                    </div>
                    <Forms />
                </article>
            </section>
        </main>
    )
}