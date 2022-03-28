import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

import man from '../../assets/man.png'

function Home() {
    return (
        <div className="containerHome">
            <img src={man} alt="manpic" />
            <div className="info-home">
                <div className="textsHome">
                    <h1>Lets Start</h1>
                    <p> Demo registration project</p>
                </div>
                <div className="buttonsHome">
                    <Link to="/login" className="buttonLinkHome">Sign in</Link>
                    <Link to="/register" className="buttonLinkHomeRegister">Register</Link>
                </div>
            </div>

        </div>
    )
}

export default Home;

