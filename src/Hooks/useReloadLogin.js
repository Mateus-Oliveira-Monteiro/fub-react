import {useContext, useEffect} from "react";
import {UsuarioContext} from "../Contexts/UserContext";
import jwtDecode from "jwt-decode";
import axios from "../Services/axios";

export const useReloadLogin = () => {

    const { UserState, dispatch } = useContext(UsuarioContext);

    console.log('Requisitando')
    useEffect(() => {
        const token = localStorage.getItem('token')
        const id = jwtDecode(token).sub.user.id
        axios.get(`/user/${id}`)
            .then(response => {
                dispatch({
                    type: 'INICIALIZA',
                    state: response.data
                })
            })
            .catch(e => console.log(e))
    }, [])

    return {
        UserState,
        dispatch,
    }

}