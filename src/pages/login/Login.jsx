// import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Tela-Login/logo-ws.png'
import style from './login.module.scss'

import Forms from '../../components/login/forms/Forms.jsx';

export default function Login() {
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = (e) => {
        const email = e.target.email.value;
        const senha = e.target.senha.value;

        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (!senha && senha.length < 6) {
            alert('Preencha todos os campos.');
            return;
        }

        navigate('/reembolsos');
    };

    const handleCriarConta = () => {
        navigate('/criar-conta');
    };

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