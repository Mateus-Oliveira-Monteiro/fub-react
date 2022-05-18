import React, {FormEvent, useEffect, useReducer} from 'react';
import Image from "react-bootstrap/Image";
import Img11 from "../../Assets/Images/11.png";

import './registrar.scss';
import loginAxios from "../../Services/loginAxios";

export default function Register() {

    const INITIAL_STATE = {
        email: '',
        password: '',
        fullname: '',
        cellphone: '',
        country: '',
        state: '',
        city: '',
        address: '',
        district: '',
        about: ''
    }

    const registerReducer = (state, action) => {

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

    const [ registerState, dispatch ] = useReducer(registerReducer, INITIAL_STATE);

    const handleChange = (e) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        });
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        await loginAxios.get(
            '/04187310/json/'
        )
            .then(response => alert(response))

    }

    useEffect(() => {
        console.log(registerState)
    }, [registerState])

    return(
        <div id={'auth-register'}>

            <form onSubmit={ (e) => handleSubmit(e) } className={'row w-100 h-100 m-0 px-3'}>

                <div className={'col-4'}>

                    <div className={'title'}>Preencha os dados abaixo:</div>

                    <div className={'input'}>
                        <label for="fullname">Nome Completo:</label>
                        <input onChange={ e => handleChange(e) } value={ registerState.fullname } placeholder={'Nome'} id={'fullname'} name={'fullname'} />
                    </div>

                    <div className={'input'}>
                        <label htmlFor="cellphone">Telefone:</label>
                        <input onChange={ e => handleChange(e) } placeholder={'Telefone'} id={'cellphone'} name={'cellphone'} />
                    </div>

                    <div className={'input'}>
                        <label htmlFor="country">País:</label>
                        <input onChange={ e => handleChange(e) } placeholder={'País'} id={'country'} name={'country'} />
                    </div>

                    <div className={'input row d-flex flex-row align-content-around gap-0'}>

                        <span className={'d-flex flex-column col-3'}>
                            <label htmlFor="state">Estado:</label>
                            <input onChange={ e => handleChange(e) } placeholder={'Estado'} id={'state'} name={'state'} />
                        </span>

                        <span className={'d-flex flex-column col-9'}>

                            <label htmlFor="city">Cidade:</label>
                            <input onChange={ e => handleChange(e) } placeholder={'Cidade'} id={'city'} name={'city'} />

                        </span>

                    </div>

                    <div className={'input'}>
                        <label htmlFor="address">Endereço:</label>
                        <input onChange={ e => handleChange(e) } placeholder={'Endereço'} id={'address'} name={'address'} />
                    </div>

                </div>

                <div className={'col-4 d-flex flex-column gap-3'}>

                    <div className={'input mt-0'}>
                        <label htmlFor="district">Bairro:</label>
                        <input onChange={ e => handleChange(e) } placeholder={'Bairro'} id={'district'} name={'district'} />
                    </div>

                    <label htmlFor={'about'} className={'title'}>Nos conte um pouco a mais sobre você:</label>

                    <div className={'input mt-0'}>
                        <textarea onChange={ e => handleChange(e) } placeholder={'Sobre'} id={'about'} name={'about'} />
                    </div>

                    <small>Escreva um pequeno texto sobre você, contando seus hobbies e seus objetivos no mercado de trabalho com intuito de destacar o perfil.</small>

                </div>

                <div className={'col-4'}>

                    <div className={'input mt-0'}>
                        <label htmlFor="email">E-mail:</label>
                        <input onChange={ e => handleChange(e) } placeholder={'E-mail'} id={'email'} name={'email'} />
                    </div>

                    <div className={'input mt-3'}>
                        <label htmlFor="password">Senha:</label>
                        <input onChange={ e => handleChange(e) } placeholder={'Senha'} id={'password'} name={'password'} />
                    </div>

                    <Image src={ Img11 } width={'90%'} />
                    <div className={'d-flex justify-content-end px-5'}>
                        <button type={'submit'}>Próximo</button>
                    </div>

                </div>

            </form>
        </div>
    )
}