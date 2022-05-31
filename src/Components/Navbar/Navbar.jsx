import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
import './navbar.css'

function Navbar() {

  const navigate = useNavigate();

  return (
    <header>
<div class="header">
        <Link to="/"><img src={logo} alt="logo" class="logo" /></Link>
        <nav>
            <ul className="nav">
                <li><Link to="/vagas"><strong>Vagas</strong></Link>
                <ul className="minimenu">
	                <li><Link to="/vagas"><strong>BICOS DISPONÍVEIS</strong></Link></li>
	                <li><Link to="/bicos_solicitados"><strong>BICOS SOLICITADOS</strong></Link></li>
                  <li><Link to="/Anunciar"><strong>ANUNCIAR VAGA</strong></Link></li>
                  <li><Link to="/cupom"><strong>CUPONS</strong></Link></li>
	       	      </ul>
                </li>
                <li><Link to="/notificacoes"><strong>Notificações</strong></Link></li>
                <li><Link to="/perfil" className="meu_perfil-nav"><strong>Meu Perfil</strong></Link></li>
                <li><Link to="/" onClick={(e) => localStorage.clear()}><strong>Sair</strong></Link></li>
              
            </ul>
        </nav>
    </div>
    </header>
  )
}

export default Navbar