import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./criarConta.module.scss";
import logo from "../../assets/Tela-Login/logo-ws.png";

export default function CriarConta() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        const nomeVal = nome.trim();
        const emailVal = email.trim().toLowerCase();
        const cpfVal = cpf.replace(/\D/g, ''); // remove qualquer não-numérico
        const senhaVal = senha.trim();
        const confirmarVal = confirmarSenha.trim();

        if (!nomeVal || !emailVal || !cpfVal || !senhaVal || !confirmarVal) {
            alert("⚠️ Preencha todos os campos.");
            return;
        }

        if (senhaVal !== confirmarVal) {
            alert("🔒 As senhas não coincidem.");
            return;
        }

        if (cpfVal.length !== 11) {
            alert("📄 CPF inválido. Deve conter 11 dígitos numéricos.");
            return;
        }

        const contasExistentes = JSON.parse(localStorage.getItem("contas")) || [];

        const emailJaExiste = contasExistentes.some((conta) => conta.email === emailVal);
        const cpfJaExiste = contasExistentes.some((conta) => conta.cpf === cpfVal);

        if (emailJaExiste || cpfJaExiste) {
            alert("🚫 E-mail ou CPF já cadastrados.");
            return;
        }

        const novaConta = {
            nome: nomeVal,
            email: emailVal,
            cpf: cpfVal,
            senha: senhaVal
        };

        localStorage.setItem("contas", JSON.stringify([...contasExistentes, novaConta]));

        alert("✅ Conta criada com sucesso!");
        navigate('/');
    };

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
                        <input type="text" placeholder="Primeiro nome" required />
                        <input type="text" placeholder="Sobrenome nome" required />
                        <input type="email" placeholder="Email" required />
                        <input type="number" placeholder="CPF" required />
                        <input type="password" placeholder="Senha" required />
                        <input type="password" placeholder="Confirme a senha" required />

                        <button
                            type="submit"
                            className={style.btnPrimary}
                            onClick={handleSubmit}
                        >
                            Criar conta
                        </button>
                        <a
                            className={style.linkLogin}
                            onClick={handleReturnLogin}
                            role="button"
                            tabIndex={0}
                        >
                            Já tem conta? Entrar
                        </a>
                    </form>
                </article>
            </section>
        </main>
    )
}