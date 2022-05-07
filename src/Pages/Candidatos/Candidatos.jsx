import React from "react";
import {Link} from "react-router-dom"
import "./candidatos.css";
import logo from '../../Assets/Images/logo.png';


 
function Candidatos (){
    return (
        <>
        <div className="header-candidatos">
                    <Link to="/"><a><img src={logo} alt="logo" className="logo" /></a></Link>
                    <nav>
                        <ul>
                            <li><Link to="/vagas"><a>Vagas</a></Link></li>
                            <li><Link to="/notificacoes"><a>Notificações</a></Link></li>
                            <li><Link to="/perfil"><a>Meu Perfil</a></Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="bloco1-candidatos">
        <strong>VEJA QUEM SE CANDIDATOU AO SEU BICO</strong>
    </div>
    <div className="fundo">
        <div className="bloco2-candidatos"> 
            <div className="bico-candidatos">
                <div className="titulo-candidatos">
                    <strong>Reforço de Português</strong>
                </div>
                <div className="desc-candidatos">
                    Procuro alguém com dominância na matéria
                    de língua portuguesa, pois amanhã tenho
                    prova e não consigo entender a matéria.
                    Não tem necessidade de ser presencial,
                    pode ser reforço online.
                </div>
                <div className="pagamento-candidatos">
                    <div className="salario-candidatos">
                        <strong>salario-candidatos:</strong>
                    </div>
                    <div className="valor-candidatos">
                        R$ 30,00
                    </div>
                </div>
            </div>
            </div>
            </div>

        </>
    )
}

export default Candidatos;