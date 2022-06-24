import React, {useContext, useEffect, useReducer} from "react";
import {useNavigate, useParams} from "react-router-dom"
import "./edit-perfil.scss";
import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import perfil from '../../Assets/Images/perfil.png';
import {UsuarioContext} from "../../Contexts/UserContext";
import { faStar, faPencil } from '@fortawesome/free-solid-svg-icons'
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import myaxios from "../../Services/myaxios";

function EditPerfil() {

    const { id } = useParams();

    const { UserState } = useContext(UsuarioContext);

    const navigate = useNavigate();

    const EditUserReducer = (state, action) => {

        switch (action.type) {

            case 'INICIALIZA':
                return action.state;

            case 'ATUALIZA':
                return {
                    ...state,
                    [action.name]: action.value,
                }

            case 'UPLOAD':
                return {
                    ...state,
                    profilePicture: action.file,
                }

            default:
                return state;

        }

    }

    const INITIAL_STATE = {
        description: '',
        occupation: '',
        birthDate: '',
        city: '',
        district: '',
        state: '',
    }

    const [ editUserFormState, dispatch ] = useReducer(EditUserReducer, INITIAL_STATE);

    const { description, occupation, birthDate, city, district, state, } = editUserFormState;

    const { name } = UserState;

    const handleChange = e => dispatch({
        type: 'ATUALIZA',
        name: e.target.name,
        value: e.target.value,
    })

    const handleUpload = e => {

        const image = document.getElementById('image');
        const file = document.getElementById('file');

        dispatch({
            type: 'UPLOAD',
            file: e.target.files[0],
        })

        const reader = new FileReader();

        reader.onload = () => {
            image.src = reader.result;
        }

        reader.readAsDataURL(file.files[0]);

    }

    const handleClick = () => {
        const file = document.getElementById('file');
        file.click();
    }

    const handleSubmit = () => {

        myaxios.put(
            `/user/${id}`,
            editUserFormState,
        )
            .then(response => {
                console.log(response);
                alert('Dados atualizados');
                navigate('/perfil');
            })
            .catch(e => {
                console.log(e)
                alert('rejects')
            })
    }

    useEffect(() => {
        const { description, occupation, birthDate, city, district, state, imagePath, name } = UserState;

        dispatch({
            type: 'INICIALIZA',
            state: {
                description,
                occupation,
                birthDate,
                city,
                district,
                state,
            }
        })
    }, [UserState])

    useEffect(() => {
        console.log(editUserFormState)
    }, [editUserFormState])

    return(
        <div id={'perfil'} className={'p-5 d-flex justify-content-center edit'}>

            <Container id={'perfil-container'} className={'bg-white px-5 py-4 h-100 d-flex flex-column gap-3'}>

                <div className={'row w-100 d-flex justify-content-between'}>
                    <span className={'col-5 row d-flex align-items-start flex-column'}>
                        <div className={'col-3 d-flex flex-row align-items-start'}>
                            <Image src={ perfil } id={'image'} roundedCircle className={'border border-1'} />
                        </div>
                        <input id={'file'} type={'file'} className={''}/>
                    </span>

                    <span className={'col-7 d-flex gap-4 flex-column justify-content-between text-secondary text-end'}>

                        <div id={'perfil-name'} className={'d-flex flex-column align-items-end'}>
                            <div className={'h-100 w-100'}>
                                {name}
                            </div>
                        </div>

                        <div id={'perfil-location'} className={'d-flex flex-row justify-content-end gap-4'}>
                            <div className={'address'}>
                                <small>Estado</small>
                                <input className={'state'} onChange={handleChange} name={ 'state' } value={ state } maxLength={ 2 } type="text" />
                            </div>
                            <div className={'address'}>
                                <small>Cidade</small>
                                <input onChange={handleChange} name={ 'city' } value={ city } type="text" />
                            </div>
                            <div className={'address'}>
                                <small>Bairro</small>
                                <input className={'district'} onChange={handleChange} name={ 'district' } value={ district } type="text" />
                            </div>
                        </div>

                    </span>
                </div>

                <div className={'row px-4'}>
                    <div id={'editabout'} className={'text-secondary'}>Sobre</div>
                    <textarea onChange={handleChange} name={ 'description' } value={ description } className={'border-1'} />
                </div>

                <div className={'d-flex justify-content-end mt-3'}>
                    <input onClick={handleSubmit} type={'submit'} className={'border border-1 bg-success'} />
                </div>

            </Container>

        </div>
    )
}

export default EditPerfil;