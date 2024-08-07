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
            <p className={areaCSS.pera}>Atualmente, tenho me aprofundado nas áreas:</p>

            <div className={areaCSS.AreaCards}>
                <Tilt options={defaultOptions}>
                    <div className={areaCSS.AreaCard}>
                        <i className="ri-bring-to-front"></i>
                        <h3>Front End</h3>

                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div className={areaCSS.AreaCard}>
                        <i className="ri-send-to-back"></i>
                        <h3>Back End</h3>

                    </div>
                </Tilt>
                <Tilt options={defaultOptions}>
                    <div className={areaCSS.AreaCard}>
                        <i className="ri-cloud-line"></i>
                        <h3>Cloud AWS</h3>

                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default Area
