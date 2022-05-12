import React, { useReducer } from 'react'
import logo2 from '../../Assets/Images/logo2.png'
import api from '../../Services/api.jsx'
import { Navigate } from 'react-router-dom'

const loginReducer = (state, action) => {
    switch(action.type){
        case 'ATUALIZA':
          return {
            ...state,
            [action.name]: action.value
          }
        case 'INICIALIZA_CAMPOS':
          return { ...action.state }
        default:
          return state;
      }
}

const Login = () => {
    const initialState = {email: "", password: ""}
    const [formState, dispatch] = useReducer(loginReducer, initialState);
    const handleChange = (e) => {
        dispatch({
          type: 'ATUALIZA',
          name: e.target.name,
          value: e.target.value
        })
        
    }

    const submitForm = (e) => {
        console.log(formState)
        api.post('user/login', formState)
        .then(response => <Navigate to="/home" replace />)
    }

  return (
    <div>
        <div class="fundo">
        <div class="meio-circulo" >
            <div class="imagem" >
                <img src={logo2} />
            </div>
        </div>
        <div class="formulario">
            <div class="titulo">
                <strong>LOGIN</strong>
            </div>
            <input name="email" value={formState.email} onChange={handleChange} />
            <div class="titulo">
                <strong>SENHA</strong>
            </div>
            <input type="password" name="password" value={formState.password} onChange={handleChange} />
            <div class="entrar">
                <button onClick={submitForm}>Entrar</button>
            </div>
            <div class="cadastrar">
                Ainda não é cadastrado? <strong><a href="cadastro_pt1.html">Cadastre-se aqui!</a></strong>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Login