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
        <>
        <div class="bloco2-mais-info">
            <div class="campos-mais-info">
                <strong>Campos</strong>
            </div>
            <div class="busque-mais-info">
                <strong>Busque por Bicos</strong>
            </div>
        </div>
        <div class="fundo-mais-info">
<div class="vaga-mais-info">
    <div class="bloco3-mais-info">
        <div class="descricao-mais-info">
            <strong>ghgfhf</strong>
            <p>dfsfd}</p>
        </div>
            <Link to="/candidatar" class="botao-mais-info"><strong>Candidatar-se</strong></Link>
    </div>
    <div class="bloco4-mais-info">
        <div class="contratante-mais-info">
            <img src={img13}/>
            <div class="nome-mais-info">
                <strong>Nome Sobrenome</strong>
            </div>
            <div class="classificacao-mais-info">
                classificacao
            </div>
            <div class="localizacao-mais-info">
                <div class="local_img-mais-info">
                </div>
                <div class="local-mais-info">
                <strong>Colinas de Indaiatuba<br />
                Indaiatuba-SP</strong>
                </div>
            </div>
            <div class="preco-mais-info">
                <strong>40,00</strong>
            </div>
        </div>
    </div>
</div>
<Link to="/Vagas"><a class="saber_menos-mais-info">-</a></Link>
</div>
</>
)
}

export default Mais_info;