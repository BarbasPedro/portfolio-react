import React, { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";

function Nav () {

    // Dark Light Mode //
    const DarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'Dark')
    }
    const LightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'Light')
    }

    DarkMode();

    const ThemeHandler = () => {
        if(document.querySelector('body').getAttribute('data-theme') === 'Dark') {
            LightMode();
        }
        else {
            DarkMode();
        }
    }

    const Menu = useRef();

    const menuHandler = () => {
        Menu.current.classList.toggle(navCSS.activeNav);
    }

    return(
        <div className={navCSS.Nav}>
            <div className={navCSS.logo}>
                <a href="#">Pedro</a>
            </div>

            <ul ref={Menu}>
                <li><a href="#home"><i className="ri-home-3-line"></i>Início</a></li>
                <li><a href="#about"><i className="ri-user-line"></i>Sobre</a></li>
                <li><a href="#skills"><i className="ri-shield-check-line"></i>Skills</a></li>
                <li><a href="#knowledgeAreas"><i className="ri-award-line"></i>Conhecimento Técnico</a></li>
                <li><a href="#portfolio"><i className="ri-folder-5-line"></i>Portfólio</a></li>
                <li><a href="#certificates"><i className="ri-verified-badge-line"></i>Certificados</a></li>
                <li><a href="#contact"><i className="ri-phone-line"></i>Contato</a></li>
            </ul>

            <div className={navCSS.NavBtns}>
                <i className="ri-moon-line" onClick={ThemeHandler}></i>
                <i className="ri-menu-4-line" onClick={menuHandler}></i>
            </div>


        </div>
    )
}

export default Nav
