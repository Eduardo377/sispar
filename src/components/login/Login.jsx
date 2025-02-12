// import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Tela-Login/logo-ws.png'
import style from './login.module.scss'

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/reembolsos');
    }

    return (
        <main>
            <section id={style['backgroundNavio']}>
            </section>
            <section className={style.sectionLogin}>
                <article>
                    <img src={logo} alt="Logo da página" />
                    <div id={style['containerTitle']}>
                        <h1>
                            Boas vindas ao Novo Portal SISPAR
                        </h1>
                        <p>
                            Sistema de Emissão de Boletos e Parcelamento
                        </p>
                    </div>
                    <form action="#">
                        <input
                            type="email"
                            name="email"
                            id={style['email']}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            name="senha"
                            id={style['senha']}
                            placeholder="Senha"
                            required
                        />
                        <a href="#" rel="noopener noreferrer">
                            Esqueci minha senha
                        </a>
                        <div id={style["buttonContainer"]}>
                            <button id={style['entrar']} onClick={handleLogin}>
                                Entrar
                            </button>
                            <button id={style['criar']}>
                                Criar conta
                            </button>
                        </div>
                    </form>
                </article>
            </section>
        </main>
    )
}