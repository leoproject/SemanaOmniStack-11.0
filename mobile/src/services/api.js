import axios from 'axios';

const api = axios.create({
    baseURL: '192.168.1.4:3333', 
});

export default api;
