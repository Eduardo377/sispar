import logo from '../../assets/Tela-Login/logo-ws.png'

export default function Login() {
    return (
        <main>
            <section id='background-navio'>
            </section>
            <section className="section-login">
                <article>
                    <img src={logo} alt="Logo da página" />
                    <div id="container-titler">
                        <h1>
                            Boas vindas ao Novo Portal SISPAR
                        </h1>
                        <p>
                            Sistema de Emissão de Boletos e Parcelamento
                        </p>
                    </div>
                    <form action="#">
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="senha"
                                id="senha"
                                placeholder="Senha"
                            />
                        </div>
                        <a href="#" rel="noopener noreferrer">
                            Esqueci minha senha
                        </a>
                        <div id="button-container">
                            <button id='entrar'>
                                <a href="#" rel="noopener noreferrer">
                                    Entrar
                                </a>
                            </button>
                            <button id='criar'>
                                <a href="#" rel="noopener noreferrer">
                                    Criar conta
                                </a>
                            </button>
                        </div>
                    </form>
                </article>
            </section>
        </main>
    )
}