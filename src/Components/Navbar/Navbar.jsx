import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
import './navbar.css'

function Navbar() {

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <header>
<div class="header">
        <Link to="/"><img src={logo} alt="logo" class="logo" /></Link>
        <nav>
            <ul>
                <li><Link to="/vagas"><strong>Vagas</strong></Link></li>
                <li><Link to="/notificacoes"><strong>Notificações</strong></Link></li>
                <li><Link to="/perfil"><strong>Meu Perfil</strong></Link></li>
                <li><Link to="/" onClick={(e) => logOut()}><strong>Sair</strong></Link></li>
            </ul>
        </nav>
    </div>
    </header>
  )
}

export default Navbar