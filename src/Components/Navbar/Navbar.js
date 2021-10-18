import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        
            <div className="navbar">
            <ul>

                <li className="nav-link">
                    <Link to="/">Home</Link>
                </li>

                <li className="nav-link">
                    <Link to="/characters">Characters</Link>
                </li>

                <li className="nav-link">
                    <Link to="/armors">Armors</Link>
                </li>

            </ul>
        </div>
        
        
    )
}
