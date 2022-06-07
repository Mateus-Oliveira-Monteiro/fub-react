import {useContext, useEffect} from "react";
import {UsuarioContext} from "../Contexts/UserContext";
import jwtDecode from "jwt-decode";
import axios from "../Services/axios";
import { useNavigate } from "react-router";

export const useReloadLogin = () => {

    const { UserState, dispatch } = useContext(UsuarioContext);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!!token) {
            const decoded = jwtDecode(token)
            if (decoded.exp < Math.floor(Date.now() / 1000)) {
                localStorage.clear();
              }
            axios.get(`/user/${decoded.sub.user.id}`)
                .then(response => {
                    dispatch({
                        type: 'INICIALIZA',
                        state: response.data
                    });
                })
                .catch(e => console.log(e))
        }
    }, []);

    return {
        UserState,
        dispatch,
    }

}