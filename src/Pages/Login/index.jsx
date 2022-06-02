import React, {useEffect, useReducer} from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.scss";
import AuthDot from "../../Components/AuthDot";
import loginAxios from "../../Services/loginAxios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";


function Index() {

    const navigate = useNavigate();

    const INITIAL_STATE = {
        email: '',
        password: ''
    }

    const loginReducer = (state, action) => {

        switch (action.type) {
            case 'ATUALIZA':
                return {
                    ...state,
                    [action.name]: action.value
                }
            default:
                return state;
        }

    }

    const [ loginState, dispatch ] = useReducer(loginReducer, INITIAL_STATE);

    const handleChange = (e) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault()

        const { email, password } = loginState;

        await loginAxios.post('/user/login', {
            email,
            password
        })
            .then(response => {
                localStorage.setItem('token', response.data.token)
                navigate('/home')
            })
            .catch(() => alert('Email ou Senha incorretos'))
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home')
        }
    }, [])

    useEffect(() => {
        console.table(loginState)
    }, [loginState])

    const [visivel, setVisi] = React.useState(false)
    async function troca() {
        setVisi(!visivel)
    }

    return (
        <>
            <AuthDot />
            <div id="auth-login">
                <form action={'POST'} onSubmit={handleLogin}>
                    <div className="auth-input">
                        <label htmlFor="email">Login</label>
                        <input onChange={handleChange} id="email" name="email" type="text" required />
                    </div>

                    <div className="auth-input">
                        <label htmlFor="senha">Senha</label>
                        <input onChange={handleChange} id="senha" name="password" type={visivel ? 'text' : 'password'} required />
                    </div>
                    
                    <button className="button-olho" type="button" onClick={troca}><FontAwesomeIcon icon={visivel ? faEyeSlash : faEye } color={'#070C3B'} fontSize={20} /></button>
                    
                    <button className="simizu-cabaço" type="submit">ENTRAR</button>
                    <small className="mt-3">
                        <span>Ainda não é cadastrado? </span>
                        <Link to="/registrar" className="cadastre-se">Cadastre-se aqui </Link>!
                    </small>
                </form>

            </div>
        </>
    );
}

export default Index;
