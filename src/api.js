import axios from 'axios';

let params = {
    baseURL: '/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
};

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    params.headers['X-CSRF-TOKEN'] = token.content;
} else {
    console.error(
        'CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

const api = axios.create(params);

export default api;
