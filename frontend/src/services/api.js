import axios from 'axios'

const api = axios.create({
    baseURL: 'https://paivacritic.onrender.com'
})

export default api