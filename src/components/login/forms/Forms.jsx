import { useNavigate } from 'react-router-dom';
import style from './forms.module.scss';
import api from '../../../Services/api.jsx';
import { useState } from 'react';

export default function Forms() {

    const navigate = useNavigate();

    const handleCriarConta = () => {
        navigate('/criarlogin');
    };

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('colaborador/login', {
                'email': email,
                'password': password
            });
            const id_colaborador = Number(localStorage.getItem('id_colaborador'));
            console.log('Login bem-sucedido:', id_colaborador);
            navigate('/reembolsos');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    }

    return (
        <form>
            <input
                type="email"
                name="email"
                id={style['email']}
                placeholder="Email"
                required
                aria-label="Insira seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                id={style['password']}
                placeholder="password"
                required
                aria-label="Insira sua password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            <a href="#" rel="noopener noreferrer">
                Esqueci minha password
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