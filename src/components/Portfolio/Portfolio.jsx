import React from 'react';
import portfolioCSS from './Portfolio.module.css';

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

function Portfolio() {
    return (
        <div className={`${portfolioCSS.portfolioWrapper} section`}>
            <h2>Meu Portfólio</h2>
            <p className={portfolioCSS.pera}>Alguns dos meus projetos:</p>

            <Swiper className={portfolioCSS.swiper}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                autoplay={{
                    delay:5000,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card1}`}>
                        <div className={portfolioCSS.content}>
                            <h2>eFood</h2>
                            <div>
                                <a href="https://efood-hm5z.vercel.app/" target='blank'>
                                    Acesse
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                                <a href="https://github.com/BarbasPedro/efood" target='blank'>
                                    GitHub
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card2}`}>
                        <div className={portfolioCSS.content}>
                            <h2>ePlay</h2>
                            <div>
                                <a href="https://eplay-bay.vercel.app/" target='blank'>
                                    Acesse
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                                <a href="https://github.com/BarbasPedro/eplay" target='blank'>
                                    GitHub
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card3}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Disney+</h2>
                            <div>
                                <a href="https://disney-plus-pedrobarbas.vercel.app/" target='blank'>
                                    Acesse
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                                <a href="https://github.com/BarbasPedro/disneyPlus" target='blank'>
                                    GitHub
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card4}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Redux Guide</h2>
                            <div>
                                <a href="https://redux-guide-eight.vercel.app/" target='blank'>
                                    Acesse
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                                <a href="https://github.com/BarbasPedro/redux-guide" target='blank'>
                                    GitHub
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card5}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Ping-Pong</h2>
                            <div>
                                <a href="https://jogo-ping-pong-topaz.vercel.app/" target='blank'>
                                    Acesse
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                                <a href="https://github.com/BarbasPedro/Jogo-Ping-Pong" target='blank'>
                                    GitHub
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card6}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Gerador de Senhas</h2>
                            <div>
                                <a href="https://gerador-de-senhas-three-hazel.vercel.app/" target='blank'>
                                    Acesse
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                                <a href="https://github.com/BarbasPedro/Gerador-de-Senhas" target='blank'>
                                    GitHub
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${portfolioCSS.Card} ${portfolioCSS.Card7}`}>
                        <div className={portfolioCSS.content}>
                            <h2>Netflix</h2>
                            <div>
                                <a href="https://netflix-drive-to-survive-landing-page.vercel.app/" target='blank'>
                                    Acesse
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                                <a href="https://github.com/BarbasPedro/netflix-drive-to-survive_landing-page" target='blank'>
                                    GitHub
                                    <i className='ri-arrow-right-line'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
