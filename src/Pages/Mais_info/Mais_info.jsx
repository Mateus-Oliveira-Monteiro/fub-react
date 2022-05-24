import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom"
import "./mais_info.css";
import logo from '../../Assets/Images/logo.png';
import img13 from '../../Assets/Images/13.png';
import myaxios from "../../Services/axios";
import { contractItem } from "../../Components/ContractItem";


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
            <div class="bloco1-mais-info">
            <strong>BICOS DISPONÍVEIS</strong>
        </div>
        <div class="bloco2-mais-info">
            <div class="campos">
                <strong>Campos</strong>
            </div>
            <div class="busque">
                <strong>Busque por Bicos</strong>
            </div>
        </div>
        <div class="fundo-mais-info">
    <div class="vaga">
    <div class="bloco3-mais-info">
        <div class="descricao">
            <strong>ghgfhf</strong>
            <p>dfsfd}</p>
        </div>
            <Link to="/candidatar" class="botao"><strong>Candidatar-se</strong></Link>
    </div>
    <div class="bloco4-mais-info">
        <div class="contratante">
            <img src={img13}/>
            <div class="nome">
                <strong>Nome Sobrenome</strong>
            </div>
            <div class="classificacao">
                classificacao
            </div>
            <div class="localizacao">
                <div class="local_img">
                </div>
                <div class="local">
                <strong>Colinas de Indaiatuba<br />
                Indaiatuba-SP</strong>
                </div>
            </div>
            <div class="preco">
                <strong>40,00</strong>
            </div>
        </div>
    </div>
</div>
<Link to="/Vagas"><a class="saber_menos">-</a></Link>
</div>
</>
)
}

export default Mais_info;