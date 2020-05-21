import React from 'react';
import logo from '../../assets/logo/smashup-logo.png';
import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt="" height="150px" width="300px" />
        </div>
    )
}

export default Header;