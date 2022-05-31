import React, {useContext, useEffect, useReducer} from "react";
import {useParams} from "react-router-dom"
import "./edit-perfil.scss";
import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import adriano from '../../Assets/Images/Adrian_de_cria.png'
import {UsuarioContext} from "../../Contexts/UserContext";
import { faStar, faPencil } from '@fortawesome/free-solid-svg-icons'
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function EditPerfil() {

    const { id } = useParams();

    const { UserState } = useContext(UsuarioContext);

    const { name } = UserState;

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
        profilePicture: '',
    }

    const [ editUserFormState, dispatch ] = useReducer(EditUserReducer, INITIAL_STATE);

    const { description, occupation, birthDate, city, district, state, profilePicture } = editUserFormState;

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

    useEffect(() => {
        const { description, occupation, birthDate, city, district, state, imagePath } = UserState;

        dispatch({
            type: 'INICIALIZA',
            state: {
                description,
                occupation,
                birthDate,
                city,
                district,
                state,
                profilePicture: imagePath,
            }
        })
    }, [UserState])

    useEffect(() => {
        console.log(editUserFormState)
    }, [editUserFormState])

    return(
        <div id={'perfil'} className={'p-5 d-flex justify-content-center edit'}>

            <Container id={'perfil-container'} className={'bg-white px-5 py-4 h-100 gap-5 d-flex flex-column'}>

                <div className={'row w-100 d-flex justify-content-between'}>
                    <span className={'col-5 row d-flex gap-3'}>
                        <div className={'col-3'}>
                            <Image onClick={handleClick} src={ adriano } id={'image'} roundedCircle className={'border'} />
                        </div>
                        <input onClick={handleUpload} id={'file'} type={'file'} className={'w-100'}/>
                    </span>

                    <span className={'col-7 d-flex flex-column justify-content-between text-secondary text-end'}>

                        <div id={'perfil-name'} className={''}>
                            <input value={ name } className={'h-100'} />
                        </div>

                        <div id={'perfil-location'} className={'d-flex flex-row justify-content-end'}>
                            <input value={ state } type="text" /> / <input value={ city } type="text" /> / <input value={ district } type="text" />
                        </div>

                    </span>
                </div>

                <div className={'row px-4'}>
                    <div id={'about'} className={'text-secondary'}>Sobre</div>
                    <textarea value={ description } className={'border-1'} />
                </div>

            </Container>

        </div>
    )
}

export default EditPerfil;