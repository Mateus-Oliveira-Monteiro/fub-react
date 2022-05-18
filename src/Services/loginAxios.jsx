import axios from "axios";

const loginAxios = axios.create({
    baseURL: "https://viacep.com.br/ws"
});

export default loginAxios;