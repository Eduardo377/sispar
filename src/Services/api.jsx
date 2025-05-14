/* eslint-disable no-unused-vars */
import axios from "axios";

// Configuração base da API
const getApiInstance = () => {
    const baseURL = import.meta.env.VITE_API_URL;

    // Validação mais robusta da URL
    if (!baseURL) {
        throw new Error("Variável VITE_API_URL não definida no arquivo .env");
    }

    try {
        new URL(baseURL); // Valida se é uma URL válida
    } catch (error) {
        throw new Error(`VITE_API_URL não é uma URL válida: ${baseURL}`);
    }

    // Cria instância do Axios com configurações padrão
    const instance = axios.create({
        baseURL,
        timeout: 10000, // Timeout de 10 segundos
        // headers: {
        //     "Content-Type": "application/json",
        //     // Adicione headers padrão aqui se necessário
        // },
    });

    // Interceptor para tratamento global de erros
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            // Você pode tratar diferentes tipos de erros aqui
            if (error.response) {
                // Erros 4xx/5xx
                console.error("Erro na resposta:", error.response.status, error.response.data);
            } else if (error.request) {
                // A requisição foi feita mas não houve resposta
                console.error("Sem resposta do servidor:", error.request);
            } else {
                // Erro ao configurar a requisição
                console.error("Erro na configuração:", error.message);
            }

            return Promise.reject(error);
        }
    );

    return instance;
};

const api = getApiInstance();

export default api;