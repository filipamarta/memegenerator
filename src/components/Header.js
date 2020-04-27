import React from "react";
import './Header.scss';
import memegenerator from '../img/memegenerator.svg'

function Header() {
    return (
        <header>
            <img 
                src={memegenerator}
                alt="meme generator"
            />
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header;