import areaCSS from './Area.module.css';

import { Tilt } from "react-tilt";

const defaultOptions = {
    max: 10,
    speed: 0.05,
    scale: 1.0,
}

function Area() {
    return(
        <div className={`${areaCSS.AreaWrapper} section`}>
            <h2>Áreas de conhecimento</h2>

            <div className={areaCSS.AreaCards}>
                <Tilt options={defaultOptions}>
                    <div className={areaCSS.AreaCard}>
                        <i className="ri-bring-to-front"></i>
                        <h3>Front End</h3>
                        <div className='TechList'>
                            <ul>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>SASS</li>
                            </ul>
                            <ul>
                                <li>Gulp</li>
                                <li>LESS</li>
                                <li>Grunt</li>
                                <li>Ajax</li>
                            </ul>
                            <ul>
                                <li>ES6+</li>
                                <li>TypeScript</li>
                                <li>Redux</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div className={areaCSS.AreaCard}>
                        <i className="ri-send-to-back"></i>
                        <h3>Back End</h3>
                        <div>
                            <ul>
                                <li>Python</li>
                                <li>POO</li>
                                <li>SQL</li>
                            </ul>
                            <ul>
                                <li>Postegres</li>
                                <li>Rest API</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div className={areaCSS.AreaCard}>
                        <i className="ri-cloud-line"></i>
                        <h3>Cloud AWS</h3>
                        <div>
                            <ul>
                                <li>AWS Organizations</li>
                                <li>Polices</li>
                                <li>Roles</li>
                            </ul>
                            <ul>
                                <li>IAM</li>
                                <li>EC2</li>
                            </ul>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default Area
