import axios from 'axios';

let params = {
    baseURL: 'http://www.mocky.io/v2/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
};

const api = axios.create(params);

export default api;
