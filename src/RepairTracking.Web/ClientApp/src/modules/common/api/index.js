import axios from 'axios';
// TODO: Levantar token desde aquí
const api = axios.create({
    baseURL: `/api`,
    headers: []
})

export default api;