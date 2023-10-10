import React from 'react';
import HeaderI from '../images/Header.png';
import './Header.css';

function Header() {
    return (
        <header className='header-container'>
            <img src={HeaderI} alt="Header" />
            
        </header>
    )
}
export default Header;