

import aboutImg from './../../assets/AboutImg.jpg';
import aboutCSS from './About.module.css';

function About () {
    return (
        <div className={`${aboutCSS.AboutWrapper} section`}>
            <div className={aboutCSS.AboutContainer} id='about'>
                <h2>Sobre mim</h2>
                <p>Nasci em Portugal e vim para o Brasil com 18 anos. Estudo programação há pouco mais de 2 anos e, desde o começo do ano 2024, me dedico somente à atividade.
                Sou <strong>Dev Full Stack</strong> formado pela EBAC - Escola Britânica de Artes Criativas & Tecnologia e graduando em Análise e Desenvolvimento de Sistemas pela Faculdade Impacta.
                Atualmente, estou desenvolvendo habilidades em Java e em cloud AWS.
                </p>

                <div className={aboutCSS.Skills}>
                    <h2>Skills</h2>

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
                            <h3>Django</h3>
                            <div className={aboutCSS.line}>
                            </div>
                        </div>

                        <div className={aboutCSS.skill}>
                            <h3>Java</h3>
                            <div className={aboutCSS.line}>
                            </div>
                        </div>

                        <div className={aboutCSS.skill}>
                            <h3>AWS</h3>
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
