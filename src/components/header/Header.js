import React from 'react';
import logo from '../../images/logo/smashup-logo.png';
import './header.css'

const Header = () => {
    return(
        <div class="header">
            <img src={logo} alt="" />
        </div>
    )
}

export default Header;