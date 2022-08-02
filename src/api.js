import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 10000,

});

api.defaults.headers.common['x-auth-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjU5NDIxMTE3LCJleHAiOjE2NTk3ODExMTd9.gwwcIHtjBjBsOhb2zTNNBgfbFeTb5tQFGcHxdbyTJyA'

export default api