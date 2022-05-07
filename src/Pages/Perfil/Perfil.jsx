import React from "react";
import {Link} from "react-router-dom"
import "./perfil.css";
import logo from '../../Assets/Images/logo.png';
import image14 from '../../Assets/Images/14.png';

function Perfil() {
    return(
        <>
                <div className="fundo-perfil">
        <div className="bloco1-perfil">
            <div className="perfil">
                <div className="foto_perfil">
                    <img src={image14} alt="foto_perfil" />
                </div>
                <div className="nome">
                    <strong>Nome Sobrenome</strong>
                </div>
                <div className="classificacao">
                    Classificacao
                </div>
                <div className="caracteristicas">
                    17 anos - Estudante
                </div>
                <div className="localizacao">
                    Indaiatuba, São Paulo, Brasil
                </div>
            </div>
            <div className="sobre">
                <strong>Sobre</strong>
                <p>Meu nome é Luís, tenho 17 anos, e estou buscando trabalhos temporários
para buscar ter experiências e oportunidades para ingressar no mercado de
trabalho. Estou no terceiro ano do ensino médio, sou excelente em
matemática, assim posso oferecer reforço na matéria, além disso sou fluente
e espanhol, sei tocar piano e já tive experiência com jardinagem.</p>
            </div>
        </div>
        <div className="bloco2-perfil">
            <div className="prestados">
                <strong>BICOS PRESTADOS</strong>
            </div>
            <div className="lista">
                <ul>
                    <li><strong>Organizar Sótao</strong></li>
                    <li><strong>Cortar grama</strong></li>
                    <li><strong>Interprete em Espanhol</strong></li>
                    <li><strong>Reforço de Matemática</strong></li>
                    <li><strong>Entregar panfletos</strong></li>
                    <li><strong>Passear com o cachorro</strong></li>
                    <li><strong>Ajudante em mercearia</strong></li>
                </ul>
            </div>
        </div>
    </div>
    </>
    )
}

export default Perfil;