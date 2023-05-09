import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ejercicios } from "../data";
import './Detail.css'
import { Link as Anchor } from 'react-router-dom';
import tilde from '../../../src/images/tlde.png'
import mancuerna from '../../../src/images/service-icon-2.png'
export default function Detail() {
    const { id } = useParams();
    const [ejercicio, setEjercicio] = useState(null);

    useEffect(() => {
        const ejer = ejercicios.find((e) => e.id === parseInt(id));
        setEjercicio(ejer);
    }, [id]);


    if (!ejercicio) {
        return <div>Cargando...</div>;
    }


    return (
        <div className="detail-contain">
            <div id="img-fondo" >
                <img src={ejercicio.fondo} alt="" />
            </div>
            <div className="detail-bg">
                <div className="mancuerna" >
                    <img src={mancuerna} alt="" />
                </div>
                <div>
                    <h2 className="titulo-detail">{ejercicio.ejercicio}</h2>
                    <div className="mancuerna">
                        <Anchor to={`/${ejercicio.categoria}`} className='btn-1' id="btn-1">
                            {ejercicio.categoria}
                        </Anchor>
                    </div>
                </div>
                <div className="img-descripcion">
                    <p>{ejercicio.descripcion}</p>
                    <img src={ejercicio.img} alt={ejercicio.ejercicio} className="ejercicio-img" />
                </div>

                {ejercicio.paso1 !== "" && (
                    <div className="pasos">
                        <h4>¿Cómo hacer {ejercicio.ejercicio}?</h4>

                        <ul>
                            <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso1}</li>
                            {ejercicio.paso2 !== "" && <li> <img src={tilde} alt="" className="tilde" /> {ejercicio.paso2}</li>}
                            {ejercicio.paso3 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso3}</li>}
                            {ejercicio.paso4 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso4}</li>}
                            {ejercicio.paso5 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso5}</li>}
                            {ejercicio.paso6 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso6}</li>}
                            {ejercicio.paso7 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso7}</li>}
                            {ejercicio.paso8 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso8}</li>}
                            {ejercicio.paso9 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso9}</li>}
                            {ejercicio.paso10 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.paso10}</li>}
                        </ul>
                    </div>
                )}


                {ejercicio.consejo1 !== "" && (
                    <div className="consejos">
                        <h4>Consejos de entrenamiento con {ejercicio.ejercicio}</h4>
                        <ul>
                            <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo1}</li>
                            {ejercicio.consejo2 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo2}</li>}
                            {ejercicio.consejo3 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo3}</li>}
                            {ejercicio.consejo4 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo4}</li>}
                            {ejercicio.consejo5 !== "" && <li><img src={tilde} alt="" className="tilde" /> {ejercicio.consejo5}</li>}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
}