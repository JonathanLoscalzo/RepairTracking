import axios from 'axios';
// TODO: Levantar token desde aquí
const api = axios.create({
    baseURL: '/api',
    headers: { 'Authorization': `Bearer ${localStorage.getItem('JWT_LOGIN')}` }
})

export default api;