import React from "react";
import {Link} from "react-router-dom"
import "./mais_info.css";
import logo from '../../Assets/Images/logo.png';
import img13 from '../../Assets/Images/13.png';


function Mais_info() {
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
            <strong>Cortar a grama</strong>
            <p>Procuro alguém com experiência para
                    cortar a grama do meu jardim. Já possuo as
                    ferramentas, sendo que necessito somente
                    de mão de obra, pois recentemente quebrei
                    as pernas, e estou morando sozinho</p>
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