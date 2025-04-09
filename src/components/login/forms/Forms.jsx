import { useNavigate } from 'react-router-dom';
import style from './forms.module.scss';

export default function Forms() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/reembolsos');
    };

    const handleCriarConta = () => {
        navigate('/criarlogin');
    };

    return (
        <form>
            <input
                type="email"
                name="email"
                id={style['email']}
                placeholder="Email"
                required
                aria-label="Insira seu email"
            />
            <input
                type="password"
                name="senha"
                id={style['senha']}
                placeholder="Senha"
                required
                aria-label="Insira sua senha"
            />
            <a href="#" rel="noopener noreferrer">
                Esqueci minha senha
            </a>
            <div id={style["buttonContainer"]}>
                <button type='button' id={style['entrar']} onClick={handleLogin}>
                    Entrar
                </button>
                <button
                    type="button"
                    id={style['criar']}
                    onClick={handleCriarConta}
                >
                    Criar conta
                </button>
            </div>
        </form>
    );
}