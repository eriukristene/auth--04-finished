import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7d58a.firebaseio.com/'
});

export default instance;