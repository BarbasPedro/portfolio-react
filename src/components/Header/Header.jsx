
import headerCSS from './../Header/Header.module.css';

import cv from './../../assets/CV Pedro Barbas (Fullstack).pdf';
import heroImg from './../../assets/hero.jpg';

function Header () {
    return (
        <div className={headerCSS.headerWrapper}>
            <div className={headerCSS.headerContainer} id='home'>
                <img src={heroImg} alt="Hero-img" />

                <h1>Olá 👋, o meu nome é <span>Pedro Barbas</span></h1>
                <p>
                    Bem-vindo ao meu portfólio, sou
                    <strong> Desenvolvedor Fullstack</strong> <br />
                    e estudo na área há 2 anos. <br />
                    Estou me aprimorando em <strong>Back End</strong> e <strong>AWS Cloud</strong>
                </p>
                <div className={headerCSS.social}>
                    <a
                        href={cv}
                        className="ri-linkedin-line"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"></a>
                    <a
                        href="https://github.com/BarbasPedro" className="ri-github-line"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"></a>
                </div>

                <a href={cv} download>
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
