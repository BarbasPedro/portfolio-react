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
                <li><a href="#"><i className="ri-home-3-line"></i>Home</a></li>
                <li><a href="#"><i className="ri-user-line"></i>About</a></li>
                <li><a href="#"><i className="ri-shield-check-line"></i>Skills</a></li>
                <li><a href="#"><i className="ri-phone-line"></i>Contact</a></li>
            </ul>

            <div className={navCSS.NavBtns}>
                <i className="ri-moon-line" onClick={ThemeHandler}></i>
                <i className="ri-menu-4-line" onClick={menuHandler}></i>
            </div>


        </div>
    )
}

export default Nav
