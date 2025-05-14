import style from "./criarConta.module.scss"
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Tela-Login/logo-ws.png'

export default function CriarConta() {
    const navigate = useNavigate()

    const handleReturnLogin = () => {
        navigate('/');
    };

    return (
        <main className={style.main}>
            <section className={style.backgroundNavio}>
            </section>
            <section className={style.sectionForm}>
                <article>
                    <div id={style.containerTitle}>
                        <img src={logo} alt="Logo SISPAR" />
                        <h1>Crie sua conta</h1>
                        <p>Preencha os campos abaixo para começar</p>
                    </div>

                    <form className={style.form}>
                        <input type="text" placeholder="name completo" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="CPF" required />
                        <input type="password" placeholder="Senha" required />
                        <input type="password" placeholder="Confirme a senha" required />

                        <button
                            type="submit"
                            className={style.btnPrimary}
                            onClick={() => {
                                handleReturnLogin
                            }}
                        >
                            Criar conta
                        </button>
                        <a href="./" className={style.linkLogin}>Já tem conta? Entrar</a>
                    </form>
                </article>
            </section>
        </main>
    )
}