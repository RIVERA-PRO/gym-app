import React from 'react'
import './CardsX.css'
import { ejercicios } from '../data'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function CardsX() {
    const ejerciciosAbdominales = ejercicios.filter(ejercicio => ejercicio);
    return (

        <div className='contain-scroll'>
            <div className='cards-contain'>
                {ejerciciosAbdominales.map((ejercicio) => (
                    <div key={ejercicio.id} className='cardsX'>
                        <img src={ejercicio.img} alt={ejercicio.ejercicio} />
                        <div className='card-text'>
                            <h5>{ejercicio.ejercicio.substring(0, 20)}...</h5>
                            <Link to={`/ejercicio/${ejercicio.id}/${ejercicio.ejercicio}`}>
                                Ver más <FontAwesomeIcon icon={faSignOutAlt} />
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>


    )
}
