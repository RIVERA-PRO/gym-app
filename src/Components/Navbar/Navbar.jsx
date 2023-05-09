import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import InputSearch from '../InputSerach/InputSearchs'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    let [modalUser, setModalUser] = useState(false);




    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };


    const [userData, setUserData] = useState(null);

    const updateUserData = () => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserData(JSON.parse(user));
        }
    };
    useEffect(() => {
        updateUserData();
    }, []);

    return (
        <header>
            <nav className={scrolled ? "navbar scrolled" : "navbar"}>

                <div className='logo'>
                    <img src="../../../img/logo.png" alt="logo" />
                </div>

                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <div className='logo-nav'>
                        <img src="../../../img/logo.png" alt="logo" />
                    </div>
                    <div className='enlaces'>
                        <Anchor to={`/`} >Inico</Anchor>
                        <Anchor to={`/abdominales`} >Abdominales</Anchor>
                        <Anchor to={`/biceps`} >Biceps</Anchor>
                        <Anchor to={`/gluteos`} >Gluteos</Anchor>
                        <Anchor to={`/pecho`} >Pecho</Anchor>
                        <Anchor to={`/triceps`} >Triceps</Anchor>
                    </div>


                </div>
                <div className='input-enlaces'>
                    <div className='enlaces2'>
                        <Anchor to={`/`} >Inico</Anchor>
                        <Anchor to={`/abdominales`} >Abdominales</Anchor>
                        <Anchor to={`/biceps`} >Biceps</Anchor>
                        <Anchor to={`/gluteos`} >Gluteos</Anchor>
                        <Anchor to={`/pecho`} >Pecho</Anchor>
                        <Anchor to={`/triceps`} >Triceps</Anchor>
                    </div>
                    <div>
                        <InputSearch />
                    </div>
                </div>

                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>




                {modalUser && (
                    <div className="modal_content">
                        <div className="modal-nav">





                        </div>
                    </div>
                )}
            </nav>


        </header>
    );
}
