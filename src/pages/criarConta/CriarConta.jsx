import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api.jsx";
import style from "./criarConta.module.scss";
import logo from '../../assets/Tela-Login/logo-ws.png';

export default function CriarConta() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        position: "",
        wage: "",
        password: "",
        confirmPassword: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, position, wage, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert("As passwords não coincidem.");
            return;
        }

        const novoColaborador = {
            name,
            email,
            position,
            wage: parseFloat(wage),
            password
        };

        try {
            await api.post("/colaborador/cadastrar", novoColaborador);
            alert("Conta criada com sucesso!");
            console.log("Conta criada com sucesso:", novoColaborador);
            navigate("/");
        } catch (error) {
            console.error("Erro ao criar conta:", error);
            alert("Erro ao criar conta. Verifique os dados e tente novamente.");
        }
    };

    return (
        <main className={style.main}>
            <section className={style.backgroundNavio}></section>

            <section className={style.sectionForm}>
                <article>
                    <div id={style.containerTitle}>
                        <img src={logo} alt="Logo SISPAR" />
                        <h1>Crie sua conta</h1>
                        <p>Preencha os campos abaixo para começar</p>
                    </div>

                    <form className={style.form} onSubmit={handleInputChange}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Nome completo"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            placeholder="Cargo"
                            required
                        />
                        <input
                            type="number"
                            name="wage"
                            value={formData.wage}
                            onChange={handleInputChange}
                            placeholder="Salário"
                            required
                            step="0.01"
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="password"
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirme a password"
                            required
                        />

                        <button
                            type="submit"
                            className={style.btnPrimary}
                            onClick={handleSubmit}
                        >
                            Criar conta
                        </button>
                        <a href="./" className={style.linkLogin}>
                            Já tem conta? Entrar
                        </a>
                    </form>
                </article>
            </section>
        </main>
    );
}
