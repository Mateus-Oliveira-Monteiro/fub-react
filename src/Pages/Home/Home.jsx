import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom"
import "./home.css";
import image from '../../Assets/Images/imagem.png'
import logo from '../../Assets/Images/logo.png'
import image9 from '../../Assets/Images/9.1.png'
import jwtDecode from "jwt-decode";
import axios from "../../Services/axios";
import {UserContext, UsuarioContext} from "../../Contexts/UserContext";


function Home() {

    const { UserState, dispatch } = useContext(UsuarioContext);

    useEffect(() => {
        if(!UserState) {
            const token = localStorage.getItem('token')
            const id = jwtDecode(token).sub.user.id
            axios.get(`/user/${id}`)
                .then(response => {
                    dispatch({
                        type: 'INICIALIZA',
                        state: response.data
                    })
                })
                .catch(e => console.log(e))
        }
    }, [])

    return (
            <>
                <section className="carrossel">
                    <div className="imagens-home">
                        <img src={image} alt="imagem1" />
                        <img src={image} alt="imagem2" />
                        <img src={image} alt="imagem3" />
                        <img src={image} alt="imagem4" />
                        <img src={image} alt="imagem5" />
                    </div>
                </section>
                <section>
                    <div className="bloco1-home">
                        <h3>SOBRE NÓS</h3>
                            <p>
                                <strong>
                                    O projeto FUB (Fazendo um Bico) consiste em<br />
                                trazer uma nova oportunidade de trabalho<br />
                                para pessoas que buscam uma forma de<br />
                                adquirirem experiência no mercado de<br />
                                trabalho além de uma renda extra.
                                </strong>
                            </p>
                        <br />
                        <h3>O QUE É UM BICO?</h3>   
                            <p>
                                <strong>Bico se tornou um ditado popular como<br />
                                forma de expressar um trabalho em<br />
                                empregos temporários ou nas horas vagas,<br />
                                como uma fonte de lucro.
                                </strong>
                            </p>
                    </div>
                    <img src={image9} className="bloco2-home" />
                </section>
            </>
    )
}

export default Home;
