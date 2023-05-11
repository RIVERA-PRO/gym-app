import React from 'react'
import './CardsX.css'
import { ejercicios } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';


export default function CardsX() {
    const ejerciciosAbdominales = ejercicios.filter(ejercicio => ejercicio);
    return (

        <div className='contain-scroll'>
            <Swiper effect={'coverflow'} grabCursor={true} loop={true} slidesPerView={'auto'} coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, }} pagination={{ el: '.swiper-pagination', clickable: true }} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true, }} onSwiper={(swiper) => console.log(swiper)} id="swiper_container"  >
                <Swiper>
                    {ejerciciosAbdominales.map((ejercicio) => (
                        <SwiperSlide id='SwiperSlide'>
                            <div key={ejercicio.id} className='cardsX'>

                                <Link to={`/ejercicio/${ejercicio.id}/${ejercicio.ejercicio}`}>
                                    <img src={ejercicio.img} alt={ejercicio.ejercicio} />

                                </Link>

                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Swiper>
        </div>


    )
}

