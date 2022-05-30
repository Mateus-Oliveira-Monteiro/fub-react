import React, {FormEvent, useEffect, useReducer} from 'react';
import { useNavigate } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import Img11 from "../../Assets/Images/11.png";

import './registrar.scss';
import loginAxios from "../../Services/loginAxios";

export default function Register() {

    const navigate = useNavigate();

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
        about: '',
        occupation: '',
        birthDate: ''
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

        const { fullname: name, email, password, cellphone: phone, occupation, birthDate, address: street, district, city, state, about: description } = registerState;

        await loginAxios.post('/user', {
            name,
            email,
            password,
            phone,
            occupation,
            birthDate,
            street,
            district,
            city,
            state,
            description: description ? description : undefined
        })
            .then(response => {
                alert('Registrado com sucesso')
                navigate('/')
            })
            .catch((e) => {
                alert('Some field is missing')
                console.log(e)
            })

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
                        <label for="fullname">Nome Completo: *</label>
                        <input required onChange={ e => handleChange(e) } value={ registerState.fullname } placeholder={'Nome'} id={'fullname'} name={'fullname'} />
                    </div>

                    <div className={'input'}>
                        <label htmlFor="cellphone">Telefone: *</label>
                        <input required onChange={ e => handleChange(e) } placeholder={'Telefone'} id={'cellphone'} name={'cellphone'} type={"number"} maxLength={'12'} />
                    </div>

                    <div className={'input'}>
                        <label htmlFor="country">País: *</label>
                        <input required onChange={ e => handleChange(e) } placeholder={'País'} id={'country'} name={'country'} />
                    </div>

                    <div className={'input row d-flex flex-row align-content-around gap-0'}>

                        <span className={'d-flex flex-column col-3'}>
                            <label htmlFor="state">Estado: *</label>
                            <select required onChange={ e => handleChange(e) } id={'state'} name={'state'}>
                                <option value={''}>-- select --</option>
                                <option value={'AC'}>AC</option>
                                <option value={'AP'}>AP</option>
                                <option value={'AM'}>AM</option>
                                <option value={'BA'}>BA</option>
                                <option value={'CE'}>CE</option>
                                <option value={'ES'}>ES</option>
                                <option value={'GO'}>GO</option>
                                <option value={'MA'}>MA</option>
                                <option value={'MT'}>MT</option>
                                <option value={'MS'}>MS</option>
                                <option value={'MG'}>MG</option>
                                <option value={'PA'}>PA</option>
                                <option value={'PB'}>PB</option>
                                <option value={'PR'}>PR</option>
                                <option value={'PE'}>PE</option>
                                <option value={'PI'}>PI</option>
                                <option value={'RJ'}>RJ</option>
                                <option value={'RN'}>RN</option>
                                <option value={'RS'}>RS</option>
                                <option value={'RO'}>RO</option>
                                <option value={'RR'}>RR</option>
                                <option value={'SC'}>SC</option>
                                <option value={'SP'}>SP</option>
                                <option value={'SE'}>SE</option>
                                <option value={'TO'}>TO</option>
                                <option value={'DF  '}>DF</option>
                            </select>
                        </span>

                        <span className={'d-flex flex-column col-9'}>

                            <label htmlFor="city">Cidade: *</label>
                            <input required onChange={ e => handleChange(e) } placeholder={'Cidade'} id={'city'} name={'city'} />

                        </span>

                    </div>

                    <div className={'input'}>
                        <label htmlFor="district">Bairro: *</label>
                        <input required onChange={ e => handleChange(e) } placeholder={'Endereço'} id={'district'} name={'district'} />
                    </div>

                    <div className={'input'}>
                        <label htmlFor="occupation">Ocupação: *</label>
                        <input required onChange={ e => handleChange(e) } placeholder={'Ocupação'} id={'occupation'} name={'occupation'} />
                    </div>

                </div>

                <div className={'col-4 d-flex flex-column'}>

                    <div className={'input mt-0'}>
                        <label htmlFor="address">Endereço: *</label>
                        <input required onChange={ e => handleChange(e) } placeholder={'Endereço'} id={'address'} name={'address'} />
                    </div>

                    <div className={'input'}>
                        <label htmlFor="birthDate">Data de nascimento: *</label>
                        <input required onChange={ e => handleChange(e) } id={'birthDate'} name={'birthDate'} type={'date'} />
                    </div>

                    <label htmlFor={'about'} className={'title my-3'}>Nos conte um pouco a mais sobre você:</label>

                    <div className={'input mt-0'}>
                        <textarea onChange={ handleChange } placeholder={'Sobre'} id={'about'} name={'about'} />
                    </div>

                    <small>Escreva um pequeno texto sobre você, contando seus hobbies e seus objetivos no mercado de trabalho com intuito de destacar o perfil.</small>

                </div>

                <div className={'col-4'}>

                    <div className={'input mt-0'}>
                        <label htmlFor="email">E-mail: *</label>
                        <input required onChange={ e => handleChange(e) } placeholder={'E-mail'} id={'email'} name={'email'} />
                    </div>

                    <div className={'input mt-3'}>
                        <label htmlFor="password">Senha: *</label>
                        <input type="password" required onChange={ e => handleChange(e) } placeholder={'Senha'} id={'password'} name={'password'} minLength={'8'} />
                        <small>Min: 8</small>
                    </div>

                    <Image src={ Img11 } width={'70%'} className={'d-flex mx-auto'} />
                    <div className={'d-flex justify-content-end px-5'}>
                        <button type={'submit'}>Próximo</button>
                    </div>

                </div>

            </form>
        </div>
    )
}