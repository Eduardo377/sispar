import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
if (!baseURL) {
    throw new Error("VITE_API_URL is not defined in .env file");
}
// Check if the baseURL is a valid URL

const api = axios.create({
    baseURL,
});

export default api;