import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
import './navbar.css'

function Navbar() {
  return (
    <div>
        <div class="header">
            <Link to="/"><img src={logo} alt="logo" class="logo" /></Link>
            <nav>
                <ul>
                    <li><Link to="/vagas">Vagas</Link></li>
                    <li><Link to="/notificacoes">Notificações</Link></li>
                    <li><Link to="/login">Meu Perfil</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar