import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom"
import "./mais_info.scss";
import img13 from '../../Assets/Images/13.png';
import myaxios from "../../Services/axios";
import {Container} from "react-bootstrap";


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
                        <button className={'mx-auto'}>Candidatar-se</button>
                    </div>

                    <div>

                    </div>

                </div>

                <div>
                    f
                </div>

            </Container>

        </div>

    )
}

export default Mais_info;