import React, {useContext, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom"
import "./perfil.scss";
import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import perfil from '../../Assets/Images/perfil.png';
import {UsuarioContext} from "../../Contexts/UserContext";
import { faStar, faPencil } from '@fortawesome/free-solid-svg-icons'
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Perfil() {

    const navigate = useNavigate();

    const {contract, id} = useParams();
    console.log(contract, id)

    const { UserState } = useContext(UsuarioContext);

    const { name, ratings, birthDate, occupation, city, state, district, description, imagePath } = UserState;
    const years = Math.floor((Date.now() - new Date(birthDate).getTime()) / 1000 / 60 / 60 / 24 / 365);
    let ratingStars = '';
    if (!!ratings && ratings.length !== 0) ratingStars = ratings.reduce((a, b) => a+b) / ratings.length
    else ratingStars = 0

    const handleEdit = () => {
        navigate(`/perfil/edit/${UserState.id}`)
    }

    return(
        <div id={'perfil'} className={'p-5 d-flex justify-content-center'}>

            <Container id={'perfil-container'} className={'bg-white px-5 py-4 h-100 gap-5 d-flex flex-column'}>

                <div className={'row'}>
                    <span className={'col-2'}>
                        <Image src={ perfil || imagePath } roundedCircle className={'border image'} />
                    </span>

                    <span className={'col-10 d-flex flex-column justify-content-between text-secondary'}>

                        <div id={'perfil-name'} className={'d-flex justify-content-between'}>
                            <span>{ name }</span>
                            <div className={'border-0'}>
                                <FontAwesomeIcon onClick={handleEdit} className={'pencil w-100 p-1'} icon={faPencil} width={100} height={100} />
                            </div>
                        </div>

                        { ratingStars !== 0 ?
                            <div className={'stars'}>
                                <StarRatingComponent starColor={'#FAC113'} editing={false} value={ratingStars} emptyStarColor={'transparent'} renderStarIcon={() => <FontAwesomeIcon className={'px-1'} icon={faStar} />} />
                                <span className={'text-warning'}>{ ratingStars }</span>
                            </div>
                            :
                            null
                        }

                        <div id={'perfil-details'}>
                            { years } anos - { occupation }
                        </div>

                        <div id={'perfil-location'}>
                            { state }, { city }, { district }
                        </div>

                    </span>
                </div>

                <div className={'row px-4'}>
                    <div id={'about'} className={'text-secondary'}>Sobre</div>
                    <div>{ description }</div>
                </div>

            </Container>

        </div>
    )
}

export default Perfil;