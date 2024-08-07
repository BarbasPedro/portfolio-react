import React from "react";
import headerCSS from './../Header/Header.module.css';

import heroImg from './../../assets/hero.jpg';

function Header () {
    return (
        <div className={headerCSS.headerWrapper}>
            <div className={headerCSS.headerContainer}>
                <img src={heroImg} alt="Hero-img" />
                <h1>Olá 👋, o meu nome é <span>Pedro Barbas</span></h1>
                <p>Bem-vindo ao meu portfólio, eu sou <strong>Desenvolvedor Fullstack</strong> <br /> Estudo na área há 2 anos</p>

                <div className={headerCSS.social}>
                    <a href="https://www.linkedin.com/in/opedrobarbas/" className="ri-linkedin-line" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://github.com/BarbasPedro" className="ri-github-line" target="_blank" rel="noopener noreferrer"></a>
                </div>

                <a href="./../../assets/CV Pedro Barbas (Fullstack).pdf" download>
                    <button>
                        Download CV
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Header
