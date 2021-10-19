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
                    <Link to="/Characters">Characters</Link>
                </li>

                <li className="nav-link">
                    <Link to="/Armors">Armors</Link>
                </li>

            </ul>
        </div>
        
        
    )
}
