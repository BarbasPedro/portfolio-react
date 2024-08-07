import React from 'react';
import portfolioCSS from './Portfolio.module.css';

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

function Portfolio() {
    return (
        <div className={`${portfolioCSS.portfolioWrapper} section`}>
            <h2>Meu Portfólio</h2>
            <p className={portfolioCSS.pera}>Atualmente, tenho me aprofundado nas áreas:</p>

            <Swiper className={portfolioCSS.swiper}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay:2500,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card1}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Projeto Front End</h2>
                            <h3>eFood</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card2}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Projeto Front End</h2>
                            <h3>ePlay</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card3}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Projeto Front End</h2>
                            <h3>Disney+</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
