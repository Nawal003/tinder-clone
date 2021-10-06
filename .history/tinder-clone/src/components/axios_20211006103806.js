import axios from 'axios';

const instance = axios.create({
    baseURL : "https://tdr-backnd.herokuapp.com"
})

export default instance;