import React, {useEffect, useReducer} from "react";
import { Link } from "react-router-dom";

import "./login.scss";
import AuthDot from "../../Components/AuthDot";

function Index() {

    type LoginAction = {
        type: string;
        name: string;
        value: string;
    }

    type LoginState = {
        email: string;
        password: string;
    }

    const INITIAL_STATE = {
        email: '',
        password: ''
    }

    const loginReducer = (state: LoginState, action: LoginAction) => {

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        });
    };

    const handleLogin = (e: React.FormEvent<HTMLButtonElement>): void => {
        e.preventDefault()

        const token = 'dlksamgkajsiom3trjmdioj'

        localStorage.setItem('token', token)
    }

    useEffect(() => {
        console.table(loginState)
    }, [loginState])

    return (
        <>
            <AuthDot />
            <div id="auth-login">
                <form>
                    <div className="auth-input">
                        <label htmlFor="email">Login</label>
                        <input onChange={handleChange} id="email" name="email" type="text" required />
                    </div>

                    <div className="auth-input">
                        <label htmlFor="senha">Senha</label>
                        <input onChange={handleChange} id="senha" name="password" type="password" required />
                    </div>

                    <button type="submit">ENTRAR</button>
                    <small className="mt-3">
                        <span>Ainda não é cadastrado? </span>
                        <Link to="/register">Cadastre-se aqui </Link>!
                    </small>
                </form>

            </div>
        </>
    );
}

export default Index;
