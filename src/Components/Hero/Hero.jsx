import React, { useState } from 'react';
import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';

import { ejercicios } from '../data'

export default function Hero() {

    const ejerciciosPorCategoria = ejercicios.reduce((categorias, ejercicio) => {
        if (!categorias[ejercicio.categoria]) {
            categorias[ejercicio.categoria] = ejercicio;
        }
        return categorias;
    }, {});

    const ejerciciosUnicos = Object.values(ejerciciosPorCategoria);

    return (
        <div className='heroContain'>
            <Swiper effect={'coverflow'} grabCursor={true} loop={true} slidesPerView={'auto'} coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, }} pagination={{ el: '.swiper-pagination', clickable: true }} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true, }} onSwiper={(swiper) => console.log(swiper)} className="swiper_container"  >
                <Swiper>
                    {ejerciciosUnicos.map((ejercicio) => (
                        <SwiperSlide>
                            <div key={ejercicio.id}>
                                <Link to={`/${ejercicio.categoria}`}>
                                    <img src={ejercicio.fondo} alt="" />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Swiper>
        </div>
    )
}
