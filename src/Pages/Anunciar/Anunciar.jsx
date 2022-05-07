import React from "react";
import {Link} from "react-router-dom"
import "./anunciar.css";
import logo from '../../Assets/Images/logo.png';
import perfil from '../../Assets/Images/perfil.png';
import img10 from '../../Assets/Images/10.png';

 
function Anunciar (){
    return (
        <>
        <div className="bloco1-anunciar">
        <strong>BICOS DISPONÍVEIS</strong>
    </div>
    <div className="bloco2-anunciar">
        <div className="campos">
            <strong>Campos</strong>
        </div>
        <div className="busque">
            <strong>Busque por Bicos</strong>
        </div>
    </div>
    <div className="fundo-anunciar">
        <div className="bloco3-anunciar">
            <div className="contratante">
                <img src={perfil} />
                <div className="nome">
                    <strong>Nome Sobrenome</strong>
                </div>
                <div className="classificacao">
                    classificacao
                </div>
                <div className="localizacao-anunciar">
                    <div className="local">
                    Indaiatuba, São Paulo, Brasil
                    </div>
                </div>
            </div>
            <div className="vaga_form">
                <div className="pt1">
                    <div className="titulo">
                        <strong>BICO</strong>
                    </div>
                    <input className="preencher"/>
                </div>
                <div className="pt2">
                    <div className="titulo">
                        <strong>SALARIO</strong>
                    </div>
                    <input className="preencher"/>
                </div>
                <div className="pt1">
                    <div className="titulo">
                        <strong>BAIRRO</strong>
                    </div>
                    <input className="preencher"/>
                </div>
                <div className="pt2">
                    <div className="titulo">
                        <strong>CIDADE</strong>
                    </div>
                    <input className="preencher" />
                </div>
                <div className="descricao-anuciar">
                    <div className="titulo"><strong>DESCRIÇÃO</strong></div>
                    <textarea className="desc_preencher"></textarea>
                </div>
            </div>
            <div className="lembrete">
                Não se esqueça de especificar com detalhes o serviço solicitado para melhor entendimento
            </div>
        </div>
        <div className="botoes-anunciar">
            <Link to="/vagas" ><a className="botao">
                <strong>VOLTAR</strong>
            </a></Link>
            <a href="" className="botao-anunciar">
                <strong>SALVAR</strong>
            </a>
        </div>
        <img className="imagem"src={img10} />
    </div>
        </>
    )
}

export default Anunciar;