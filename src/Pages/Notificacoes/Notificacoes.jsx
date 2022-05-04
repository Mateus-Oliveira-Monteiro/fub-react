import React from 'react';
import "./notificacoes.css";
import {Link} from "react-router-dom"
import logo from '../../Assets/Images/logo.png';
import perfil from '../../Assets/Images/perfil.png';


function Notificacoes() {
    return(
        <>
        <div classNameName="header">
                    <Link to="/"><a><img src={logo} alt="logo" className="logo" /></a></Link>
                    <nav>
                        <ul>
                            <li><Link to="/vagas"><a>Vagas</a></Link></li>
                            <li><Link to="/notificacoes"><a>Notificações</a></Link></li>
                            <li><Link to="/perfil"><a>Meu Perfil</a></Link></li>
                        </ul>
                    </nav>
        </div>
    <div className="bloco1-notifica">
        <h1>NOTIFICAÇÕES</h1>
    </div>
    <div className="fundo">
        <div className="bloco2-notifica">
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            <div className="notificacoes"> 
                <div className="perfil">
                    <img src={perfil} alt="perfil" />
                </div>
                <a href="avaliacao.html" className="notificacao-notifica">
                    <strong>Notificação!</strong><br />
                    Informações sobre a notificação
                </a>
                <div className="horario">
                    30 min
                </div>
            </div>
            
        </div>
</div>
</>
    )
}
export default Notificacoes;