import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 0e97c5a6d2d588f8447d49cfee1650a28f6d76ec732c2778ca4817ce558ac496'
    }
})