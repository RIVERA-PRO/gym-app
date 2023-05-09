import React, { useState } from "react";
import "./InputSearchs.css";
import { ejercicios } from '../data';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
export default function InputSearchs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEjercicios, setFilteredEjercicios] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [selectedEjercicio, setSelectedEjercicio] = useState(null);

    const handleButtonClick = (ejercicio) => {
        setSelectedEjercicio(ejercicio);
        console.log(ejercicio);
    };

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const results = ejercicios.filter((ejercicio) => {
            return (
                ejercicio.ejercicio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ejercicio.categoria.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        setFilteredEjercicios(results);
        setShowResults(searchTerm !== "");
        setNoResults(searchTerm !== "" && results.length === 0);
    };


    return (
        <div className="fondo-input">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="inputJobs"
                />
                {showResults && (
                    <div className="modal">
                        {filteredEjercicios.map((ejercicio) => (
                            <div key={ejercicio.id}>
                                <button className="btn-music" onClick={() => handleButtonClick(ejercicio)}>

                                </button>
                                <Link to={`/ejercicio/${ejercicio.id}/${ejercicio.ejercicio}`}> <FontAwesomeIcon icon={faSignOutAlt} /> <p>{ejercicio.ejercicio} - {ejercicio.categoria}</p> </Link>
                            </div>
                        ))}
                        {noResults && <p>No se encontraron resultados.</p>}
                    </div>
                )}
            </div>
        </div>
    );
}
