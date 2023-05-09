import React from 'react'
import { ejercicios } from '../data'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Abdominales.css'
import HeroAbdominales from './HeroAbdominales';


export default function Abdominales() {
    const ejerciciosAbdominales = ejercicios.filter(ejercicio => ejercicio.categoria === "Abdominales");

    return (
        <div >
            <HeroAbdominales />
            <div className='cards-contain'>
                {ejerciciosAbdominales.map((ejercicio) => (
                    <div key={ejercicio.id} className='card'>
                        <img src={ejercicio.img} alt={ejercicio.ejercicio} />
                        <div className='card-text'>
                            <h4>{ejercicio.ejercicio.substring(0, 20)}...</h4>
                            <p>{ejercicio.descripcion.substring(0, 55)}..</p>
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
