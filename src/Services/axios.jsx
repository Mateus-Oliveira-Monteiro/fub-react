import axios from 'axios';

const myaxios = axios.create({
    baseURL: "https://pure-springs-17927.herokuapp.com/v1/fub"
})

myaxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token){
        config.headers['authorization'] = "Bearer " + token;
    };
    return config;
}, (error) => {
    return Promise.reject(error);
})


export default myaxios;