/* eslint-disable no-undef */
import React from "react";

import aboutImg from './../../assets/aboutImg.png';
import aboutCSS from './About.module.css';

function About () {
    return (
        <div className={`${aboutCSS.AboutWrapper} section`}>
            <div className={aboutCSS.AboutContainer}>
                <h2>Sobre mim</h2>
                <p>Eu sou o Pedro, tenho 30 anos, nasci em Portugal e vim para o Brasil com 18 anos. Estudo programação há pouco mais de 2 anos e, desde o começo do ano 2024, me dedico somente à atividade.
                Sou Dev Full Stack formado pela EBAC - Escola Britânica de Artes Criativas & Tecnologia e graduando em Análise e Desenvolvimento de Sistemas pela Faculdade Impacta.
                Atualmente, tenho me interessado por cloud AWS, estou em um treinamento avançado sobre e também sobre Java.
                </p>

                <div className={aboutCSS.Skills}>
                    <h2>Skills</h2>

                    <p>Hard Skills:</p>

                    <div className={aboutCSS.SkillWrapper}>
                        <div className={aboutCSS.skill}>
                            <h3>Python</h3>
                            <div className={aboutCSS.line}>

                            </div>
                        </div>
                        <div className={aboutCSS.skill}>
                            <h3>React</h3>
                            <div className={aboutCSS.line}>

                            </div>
                        </div>
                        <div className={aboutCSS.skill}>
                            <h3>Java</h3>
                            <div className={aboutCSS.line}>

                            </div>
                        </div>
                        <div className={aboutCSS.skill}>
                            <h3>Django</h3>
                            <div className={aboutCSS.line}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={aboutCSS.AboutImg}>
                <img src={aboutImg} alt="" />
                <div className={aboutCSS.Exp}>
                    <h2><span>2+</span> de estudos</h2>
                </div>
            </div>
        </div>
    )
}

export default About
