import React from "react";
import {Link} from "react-router-dom"
import "./vagas.css";
import logo from '../../Assets/Images/logo.png'

function Vagas() {
    return (
        <>
        <div className="header">
                    <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
                    <nav>
                        <ul>
                            <li><Link to="/vagas">Vagas</Link></li>
                            <li><Link to="/notificacoes">Notificações</Link></li>
                            <li><Link to="/perfil">Meu Perfil</Link></li>
                        </ul>
                    </nav>
                </div>
    <div className="bloco1-vagas">
        <strong>BICOS DISPONÍVEIS</strong>
    </div>
    <div className="bloco2-vagas">
        
    </div>

    <div className="fundo">
        <a href="anunciar.html" className="anunciar">
            <strong>ANUNCIAR VAGA</strong>
        </a>

        <div className="vagas">
            <div className="informações">
                <div className="info">
                    <strong>SERVIÇO</strong>
                </div>
                <div className="info">
                    <strong>LOCALIZAÇÃO</strong>
                </div>
                <div className="info">
                    <strong>SALÁRIO</strong>
                </div>
                <div className="vazio">
                </div>
            </div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to="/mais_info"  className="saber_mais">+</Link></div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to="/mais_info"  className="saber_mais">+</Link>
            </div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to="/mais_info"  className="saber_mais">+</Link>
            </div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to="/mais_info"  className="saber_mais">+</Link>
            </div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to="/mais_info"  className="saber_mais">+</Link>
            </div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to="/mais_info"  className="saber_mais">+</Link>
            </div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to="/mais_info"  className="saber_mais">+</Link>
            </div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to="/mais_info"  className="saber_mais">+</Link>
            </div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to="/mais_info"  className="saber_mais">+</Link>
            </div>
            <div className="vaga">
                <div className="desc_da_vaga">
                    <strong>Cortar grama</strong>
                </div>
                <div className="local_da_vaga">
                    <strong>Indaitatuba-SP</strong>
                </div>
                <div className="preco_da_vaga">
                    <strong>20.00</strong>
                </div>
                    <Link to = "Mais_info" className="saber_mais">+</Link>
            </div>
        </div>
    </div>
    </>
    )
}

export default Vagas;
