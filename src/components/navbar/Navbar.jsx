import './Navbar.css'
import logo from '/src/assets/logo-white.png'
import {Link, NavLink} from "react-router-dom";
/*import { Routes, Route } from 'react-router-dom';*/

function Navbar() {
    return (

        <>
            <nav className="navbar">
                <figure>
                    <img className="company-logo" src={logo} alt="company logo"/>
                </figure>
                <ul className="links">
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/overview">Alle posts</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}to="/new-post">Nieuwe post</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar