import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        
            <div className="navbar">
            <ul>

                <li className="nav-link">
                    <Link to="/">Accueil</Link> 
                </li>

                <li className="nav-link">
                    <Link to="/Characters">Personnages</Link>
                </li>

                <li className="nav-link">
                    <Link to="/Armors">Armures</Link>
                </li>

            </ul>
        </div>
        
        
    )
}
