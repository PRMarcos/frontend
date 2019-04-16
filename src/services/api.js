import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-marcos.herokuapp.com',
});

export default api;