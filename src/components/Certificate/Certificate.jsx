import React from 'react';
import certificateCSS from './Certificate.module.css';
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { certificadoPaths } from '../../assets/certificates/certificates';

function Certificate() {
    const totalCertificados = certificadoPaths.length;

    return (
        <div className={`${certificateCSS.certificateWrapper} section`} id='certificates'>
            <h2>Meus Certificados ({totalCertificados})</h2>

            <Swiper
                className={certificateCSS.swiper}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                autoplay={{ delay: 2500 }}
                modules={[Autoplay]}
            >
                {certificadoPaths.map((certificado, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={certificateCSS.Card}
                            style={{ backgroundImage: `url(${certificado})` }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Certificate;
