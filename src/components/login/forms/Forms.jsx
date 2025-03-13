import { useNavigate } from 'react-router-dom';
import style from './forms.module.scss';

export default function Forms() {

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
        <form onSubmit={handleLogin}>
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
                <button id={style['entrar']} onClick={handleLogin}>
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