import axios from 'axios';

const instance = axios.create({
    baseURL : "https://tdr-backnd.herokuapp.com/1"
})

export default instance;