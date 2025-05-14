import axios from "axios";

//Cria uma instância do axios, chamada "api"
const api = axios.create({
    baseURL: "http://localhost:5000" //Define a URL base para todas as requisições feitas com essa instância.
})

export default api;