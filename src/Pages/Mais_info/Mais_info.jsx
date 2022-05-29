import React, { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom"
import "./mais_info.scss";
import img13 from '../../Assets/Images/13.png';
import adriano from '../../Assets/Images/Adrian_de_cria.png';
import myaxios from "../../Services/axios";
import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faLocationDot, faAnglesLeft, faPhone} from "@fortawesome/free-solid-svg-icons";
import img12 from '../../Assets/Images/12.png';


function Mais_info() {

    const { id } = useParams();
    const [contract, setContract] = useState(null);

    const navigate = useNavigate();

    const getContract = () => {
        myaxios.get(`/contract/${id}`)
        .then(res => setContract(res.data))
        .catch((err) => alert(err))
    }

    const handleContract = () => {
        const button = document.getElementById('candidatar')

        button.ariaDisabled = true;
        button.innerText = 'Já candidatado';

        button.classList.remove('text-light');
        button.classList.add('text-dark');

        button.style.backgroundColor = 'transparent';
        button.style.borderColor = '#ccc';

        document.getElementById('phone').classList.remove('invisible')
        document.getElementById('footerContracted').classList.remove('hidden')
    }

    const handleBackFunction = () => {
        navigate('/vagas')
    }

    useEffect(() => {
        getContract()
    }, [])

    return(

        <div id={'mais_info'} className={'pt-4'}>

            <div id={'mais_info_header'} className={'w-100'}>

                <div style={{ backgroundColor: '#B4A8B7' }} className={'text-light'}>
                    BICOS DISPONÍVEIS
                </div>

                <div style={{ backgroundColor: '#070C3B' }} className={'d-flex align-items-center px-5'}>
                    <button onClick={handleBackFunction} id={'backArrow'} className={'h-75'} style={{ borderRadius: '5px' }}>
                        <FontAwesomeIcon icon={faAnglesLeft} fontSize={30} className={'text-light'} />
                    </button>
                </div>

            </div>

            <Container className={'mt-4'}>

                <div className={'px-5 py-4'}>

                    <div id={'left_part'} className={'p-3'}>
                        <h2>Cortar a grama</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim augue quam, in facilisis nunc tincidunt et. Sed fringilla accumsan rutrum. Morbi sagittis, sem sit amet dignissim luctus, sapien quam viverra elit, sed feugiat felis purus nec lacus. Fusce dapibus, nulla in convallis suscipit, felis ante pulvinar lorem, volutpat cursus sapien mauris a diam. Integer ut lacinia purus, sed lacinia ante. Mauris eget consectetur turpis. Ut tincidunt, ex id egestas consectetur, magna sapien tristique tellus, at lobortis tortor dolor at ex. Vivamus euismod nunc posuere, gravida lorem nec, ornare erat. Donec convallis est ante, sit amet pellentesque elit rutrum sed. Praesent semper, erat ac finibus laoreet, enim risus malesuada sapien, ac venenatis enim tortor at lectus. Proin convallis, elit non ultrices auctor, mauris nisi pulvinar velit, a commodo tortor ligula sed nisi. Nulla nisi turpis, gravida eget molestie non, bibendum sed lacus.</p>
                        <div className={'d-flex'}>
                            <button onClick={handleContract} id={'candidatar'} className={'text-light'}>Candidatar-se</button>
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

                            <div id={'location'} className={''}>

                                <div className={'d-flex align-items-center justify-content-center w-100 h-100'}>
                                    <FontAwesomeIcon icon={faLocationDot} color={'#D57961'} fontSize={40} />
                                </div>

                                <div className={'d-flex flex-column justify-content-center'}>
                                    <span>Araçapuca da Terra</span>
                                    <span>Goias - GO</span>
                                </div>

                            </div>

                            <div id={'phone'} className={'d-flex align-items-center invisible'}>
                                <div className={'d-flex flex-row p-4 w-100 align-items-center gap-3'}>
                                    <FontAwesomeIcon icon={faPhone} fontSize={40} color={'#D57961'} />
                                    <span className={'text-dark'}>40028922</span>
                                </div>
                            </div>

                            <div className={'d-flex flex-row align-items-center'}>
                                <span className={'flex-fill'}>
                                    Salário:
                                </span>

                                <span className={'flex-fill'}>
                                    40,00
                                </span>
                            </div>

                        </div>
                    </div>

                </div>

            </Container>

            <div id={'footerContracted'} className={'row hidden'}>

                <div className={'offset-3 col-3 pt-5'}>
                    <h3 className={'mb-4'}>Comece a trabalhar agora!</h3>
                    <div>
                        <p>
                            Entre em contato com o seu contratante para saber de mais detalhes do serviço, local e horário para a realização do seu Bico!
                        </p>
                        <strong>
                            IMPORTANTE: não se esqueça de pegar o seu cupom FUB, para a confirmação do seu Bico!
                        </strong>
                    </div>
                </div>

                <div className={'col-3'}>
                    <Image src={img12} width={350} />
                </div>

            </div>

        </div>

    )
}

export default Mais_info;