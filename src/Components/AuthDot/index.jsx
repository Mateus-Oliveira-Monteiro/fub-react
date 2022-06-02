import Image from "react-bootstrap/Image";
import logoImg from "../../Assets/Images/big_penis.png";
import React from "react";

import './auth-dot.scss';

function AuthDot() {
    return (

        <div id="auth-dot">
            <canvas className="dot" />
            <Image id="logo" src={logoImg} fluid rounded />
        </div>
    )
}

export default AuthDot;