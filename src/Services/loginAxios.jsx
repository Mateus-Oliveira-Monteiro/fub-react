import axios from "axios";

const loginAxios = axios.create({
    baseURL: "https://pure-springs-17927.herokuapp.com/v1/fub",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default loginAxios;