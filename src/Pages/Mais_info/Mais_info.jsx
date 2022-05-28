import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom"
import "./mais_info.scss";
import img13 from '../../Assets/Images/13.png';
import adriano from '../../Assets/Images/Adrian_de_cria.png';
import myaxios from "../../Services/axios";
import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faLocationDot} from "@fortawesome/free-solid-svg-icons";


function Mais_info() {

    const { id } = useParams();
    const [contract, setContract] = useState(null);

    const getContract = () => {
        myaxios.get(`/contract/${id}`)
        .then(res => setContract(res.data))
        .catch((err) => alert(err))
    }

    useEffect(() => {
        getContract()
    }, [])

    return(

        <div id={'mais_info'}>

            <div id={'mais_info_header'} className={'w-100'}>

                <div style={{ backgroundColor: '#B4A8B7' }} className={'text-light'}>
                    BICOS DISPONÍVEIS
                </div>

                <div style={{ backgroundColor: '#070C3B' }}></div>

            </div>

            <Container className={'mt-4'}>

                <div className={'px-5 py-4'}>

                    <div id={'left_part'} className={'p-3'}>
                        <h2>Cortar a grama</h2>
                        <p>mais info</p>
                        <div className={'d-flex'}>
                            <button className={'text-light'}>Candidatar-se</button>
                        </div>
                    </div>

                    <div>
                        <div className={'h-100 w-100'}>

                            <div className={''}>

                                <div className={'d-flex justify-content-center align-items-center'}>
                                    <Image src={adriano} width={100} className={'border border-1'} roundedCircle />
                                </div>

                                <div className={'px-3 d-flex align-items-center'}>
                                    <div className={'d-flex flex-column'}>

                                        <h6>Conde Dracula</h6>
                                        <section className={'d-flex align-items-center'}>
                                            <StarRatingComponent starColor={'#FAC113'} editing={false} value={3} emptyStarColor={'transparent'} renderStarIcon={() => <FontAwesomeIcon className={'px-1'} icon={faStar} />} />
                                            <span>3</span>
                                        </section>
                                    </div>
                                </div>

                            </div>

                            <div className={'d-flex align-items-center'}>

                                <FontAwesomeIcon icon={faLocationDot} />

                            </div>

                            <div>
f
                            </div>

                        </div>
                    </div>

                </div>

                <div>
                    fffff
                </div>

            </Container>

        </div>

    )
}

export default Mais_info;