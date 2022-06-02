import './interested_employee.scss';
import Image from "react-bootstrap/Image";
import perfil from '../../Assets/Images/perfil.png';
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import myaxios from "../../Services/myaxios";

export const InterestedEmployee = props => {

    const [userState, setUserState] = useState({
        name: '',
        ratings: [],
    });

    const [rate, setRate] = useState(null);

    const { name, ratings } = userState;

    const id = props.interested;

    const idContract = props.contract;

    const navigate = useNavigate();

    const handleContract = () => {
        myaxios.put(`/contract/select/${idContract}/employee/${id}`)
        .then(res => alert(res))
        .catch((error) => alert(error))
    }

    useEffect(() => {
        myaxios.get(`/user/${id}`)
            .then(response => {
                setUserState(response.data);
                setRate(response.data.ratings.reduce((a, b) => a+b) / response.data.ratings.ratings.length);
            })
            .catch(e => console.log('Error: ', e))
    }, [])

    return (
        <div id={ id } className={'interested bg-light'}>

            <div className={'d-flex align-items-center justify-content-center'}>
                <Image src={perfil} roundedCircle width={100} className={'border border-1'} />
            </div>

            <div className={'d-flex justify-content-center flex-column'}>
                <div>
                    { name }
                </div>

                <div className={'d-flex align-items-center'}>
                    <StarRatingComponent starColor={'#FAC113'} editing={false} value={ rate } emptyStarColor={'transparent'} renderStarIcon={() => <FontAwesomeIcon className={'px-1'} icon={faStar} />} className={'position-static'} />
                    <span>{ rate }</span>
                </div>
            </div>

            <div className={'d-flex align-items-center flex-row'}>
                <button onClick={() => navigate(`/perfil/${id}`)} className={'flex-fill bg-primary bg-opacity-75 text-light border-0'}>Ver Perfil</button>
                <button onClick={handleContract} className={'flex-fill text-light bg-success border-0'}>Contratar</button>
            </div>

        </div>
    )

}