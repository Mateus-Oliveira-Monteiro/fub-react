import React, { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom"
import "./mais_info.scss";
import perfil from '../../Assets/Images/perfil.png';
import myaxios from "../../Services/axios";
import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faLocationDot, faAnglesLeft, faPhone, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import img12 from '../../Assets/Images/12.png';
import {useReloadLogin} from "../../Hooks/useReloadLogin";


function Mais_info() {

    const { id } = useParams();
    const [contract, setContract] = useState({
        title: null,
        description: null,
        proposedValue: null,
        district: null,
        city: null,
        employer: {
            phone: null,
            imagePath: null,
            name: null,
            id: null,
        },
        interested: [],
    });

    const { UserState } = useReloadLogin();

    const { title, description, district, city, employer } = contract;
    let proposedValue = contract.proposedValue;
    proposedValue = parseFloat(proposedValue).toFixed(2).toString().replace('.', ',');

    const navigate = useNavigate();

    const getContract = () => {
        myaxios.get(`/contract/${id}`)
        .then(res => setContract(res.data))
        .catch((err) => alert(err))
    }

    const handleContract = () => {
        const button = document.getElementById('candidatar')

        myaxios.patch(`/contract/apply/${id}`)
            .then(() => {

                button.ariaDisabled = true;
                button.innerText = 'Já candidatado';

                button.classList.remove('text-light');
                button.classList.add('text-dark');

                button.style.backgroundColor = 'transparent';
                button.style.borderColor = '#ccc';

                document.getElementById('phone').classList.remove('invisible')
                document.getElementById('footerContracted').classList.remove('hidden')

            })
            .catch(e => {
                console.log('Error: ', e);
                alert('Erro')
            })

    }

    const handleBackFunction = () => {
        navigate('/vagas')
    }

    const deleteBeak = () => {
        myaxios.delete(`/contract/${id}`)
        .then(alert(`${title} deletado.`))
        .then(navigate('/vagas'))
        .catch((err) => alert(err))
    }

    useEffect(() => {
        getContract()
    }, [])

    useEffect(() => {

        if (contract.employer.id !== UserState.id && !!contract.interested.filter(interested => interested.id === UserState.id)) {

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

    }, contract.interested)

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
                        <h2>{ title }</h2>
                        <p>{ description }</p>

                        {
                            UserState.id !== employer.id
                                ?
                                    <div className={'d-flex'}>
                                        <button onClick={handleContract} id={'candidatar'}
                                                className={'text-light'}>Candidatar-se
                                        </button>
                                    </div>
                                :
                                    null
                        }
                    </div>

                    <div>
                        <div className={'h-100 w-100'}>

                            <div className={''}>

                                <div className={'d-flex justify-content-center align-items-center'}>
                                    <Image src={ employer.imagePath ?? perfil } width={100} className={'border border-1'} roundedCircle />
                                </div>

                                <div className={'px-3 d-flex align-items-center'}>
                                    <div className={'d-flex flex-column'}>

                                        <h6>{ employer.name }</h6>
                                        <section className={'d-flex align-items-center'}>
                                            <StarRatingComponent starColor={'#FAC113'} editing={false} value={3} emptyStarColor={'transparent'} renderStarIcon={() => <FontAwesomeIcon className={'px-1'} icon={faStar} />} className={'position-static'} />
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
                                    <span>{ district }</span>
                                    <span>{ city }</span>
                                </div>

                            </div>

                            <div id={'phone'} className={'d-flex align-items-center invisible'}>
                                <div className={'d-flex flex-row p-4 w-100 align-items-center gap-3'}>
                                    <FontAwesomeIcon icon={faPhone} fontSize={40} color={'#D57961'} />
                                    <span className={'text-dark'}>{ employer.phone }</span>
                                </div>
                            </div>

                            <div className={'d-flex flex-row align-items-center'}>
                                <span className={'flex-fill'}>
                                    Salário:
                                </span>

                                <span className={'flex-fill'}>
                                    R$ { proposedValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }) }
                                </span>
                                { UserState.id === employer.id ?
                                    <div className={ 'd-flex justify-content-center align-items-center delete' }>
                                        <FontAwesomeIcon icon={ faTrashCan } onClick={(e) => deleteBeak()}
                                        fontSize={25} color={'#FFFFFF'} />
                                    </div>
                                    :
                                    null
                                }
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