import React, {FormEvent, useEffect, useReducer} from 'react';
import Image from "react-bootstrap/Image";
import Img11 from "../../Assets/Images/11.png";
import AuthDot from "../../Components/AuthDot";

import './registrar.scss';

export default function Register() {

    type RegisterAction = {
        type: string;
        name: string;
        value: string;
    }

    type RegisterState = {
        email: string;
        password: string;
        fullname: string;
        cellphone: string;
        country: string;
        _state: string;
        city: string;
        address: string;
        district: string;
        about: string;
    }

    const INITIAL_STATE = {
        email: '',
        password: '',
        fullname: '',
        cellphone: '',
        country: '',
        _state: '',
        city: '',
        address: '',
        district: '',
        about: ''
    }

    const registerReducer = (state: RegisterState, action: RegisterAction) => {

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        await fetch('https://pure-springs-17927.herokuapp.com/v1/fub/user', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

            })
        }).then(response => console.log(response))

    }

    useEffect(() => {
        console.log(registerState)
    }, [registerState])

    return(
        <div id={'auth-register'}>
            <AuthDot />

            <form onSubmit={ (e) => handleSubmit(e) }>
                <div id="page1">

                    <div className="auth-input d-flex flex-column align-items-center gap-2">
                        <label htmlFor="email">E-mail</label>
                        <input onChange={handleChange} value={ registerState.email } id="email" name="email" type="text" />
                    </div>

                    <div className="auth-input d-flex flex-column align-items-center gap-2">
                        <label htmlFor="senha">Senha</label>
                        <input onChange={handleChange} value={ registerState.password } id="senha" name="password" type="password" />
                    </div>

                </div>

                {/* ------------------------------------------------------------------------------------------ */}

                <div id={'page2'}>
                    <div className="fundo pb-4">

                        <div className="preencha">
                            <strong>Preencha os dados abaixo:</strong>
                        </div>

                        <div className="bloco1">
                            <Image src={Img11} />
                        </div>

                        <div className="bloco2">
                            <div className="formulario">

                                <label className="titulo">
                                    Nome completo:
                                </label>
                                <input onChange={handleChange} value={ registerState.fullname } name="fullname" />
                                <label className="titulo">
                                    Telefone:
                                </label>
                                <input onChange={handleChange} value={ registerState.cellphone } name="cellphone" type="number" />
                                <label className="titulo">
                                    País:
                                </label>
                                <input onChange={handleChange} value={ registerState.country } name="country" />

                                <div className="local">
                                    <div className="estado">

                                        <label className="titulo">
                                            Estado:
                                        </label>
                                        <select onChange={handleChange} name="_state">
                                            <option value={'AC'}>AC</option>
                                            <option value={'AL'}>AL</option>
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
                                            <option value={'DF'}>DF</option>
                                        </select>
                                    </div>

                                    <div className="cidade">
                                        <label className="titulo">
                                            Cidade:
                                        </label>
                                        <input onChange={handleChange} value={ registerState.city } name="city" />
                                    </div>
                                </div>

                                <label className="titulo">
                                    Endereço:
                                </label>
                                <input onChange={handleChange} value={ registerState.address } name="address" />

                                <label className="titulo">
                                    Bairro:
                                </label>
                                <input onChange={handleChange} value={ registerState.district } name="district" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------------------------------------------------------ */}

                <div id="page3">

                    <div className="fundo pb-5">
                        <div className="bloco1">

                            <div className="formulario">
                                <label className="titulo">
                                    Sobre:
                                </label>
                                <textarea onChange={handleChange} value={ registerState.about } className={'p-3'} name="about" />
                                <span className="dica px-5">
                                    Escreva um pequeno texto sobre você, contando seus
                                    hobbies e seu objetivos no mercado de trabalho com
                                    intuito de destacar o seu perfil.
                                </span>
                            </div>
                            <div className={'w-100'}>
                                <button className={'w-50'}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}