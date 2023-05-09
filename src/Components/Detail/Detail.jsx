import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ejercicios } from "../data";
import './Detail.css'
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
                <h2>{ejercicio.ejercicio}</h2>
                <p>{ejercicio.categoria}</p>
                <p>{ejercicio.descripcion}</p>
                <img src={ejercicio.img} alt={ejercicio.ejercicio} className="ejercicio-img" />

                {ejercicio.paso1 !== "" && (
                    <div className="pasos">
                        <h4>¿Cómo hacer {ejercicio.ejercicio}?</h4>
                        <ol>
                            <li>{ejercicio.paso1}</li>
                            {ejercicio.paso2 !== "" && <li>{ejercicio.paso2}</li>}
                            {ejercicio.paso3 !== "" && <li>{ejercicio.paso3}</li>}
                            {ejercicio.paso4 !== "" && <li>{ejercicio.paso4}</li>}
                            {ejercicio.paso5 !== "" && <li>{ejercicio.paso5}</li>}
                            {ejercicio.paso6 !== "" && <li>{ejercicio.paso6}</li>}
                            {ejercicio.paso7 !== "" && <li>{ejercicio.paso7}</li>}
                            {ejercicio.paso8 !== "" && <li>{ejercicio.paso8}</li>}
                            {ejercicio.paso9 !== "" && <li>{ejercicio.paso9}</li>}
                            {ejercicio.paso10 !== "" && <li>{ejercicio.paso10}</li>}
                        </ol>
                    </div>
                )}


                {ejercicio.consejo1 !== "" && (
                    <div className="consejos">
                        <h4>Consejos de entrenamiento con {ejercicio.ejercicio}</h4>
                        <ol>
                            <li>{ejercicio.consejo1}</li>
                            {ejercicio.consejo2 !== "" && <li>{ejercicio.consejo2}</li>}
                            {ejercicio.consejo3 !== "" && <li>{ejercicio.consejo3}</li>}
                            {ejercicio.consejo4 !== "" && <li>{ejercicio.consejo4}</li>}
                            {ejercicio.consejo5 !== "" && <li>{ejercicio.consejo5}</li>}
                        </ol>
                    </div>
                )}
                Esto hará que los elementos correspondientes se muestren solo si la propiedad no es un string vacío.








            </div>
        </div>
    );
}