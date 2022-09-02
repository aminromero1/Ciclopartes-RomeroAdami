import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = ({type}) => {


    

    if(type === "header"){
        return (
            <>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav nav me-auto mb-2 mb-md-0 ">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 link-dark">Home</Link></li>
                    <li className="nav-item"><Link to="/ruta" className="nav-link px-2 link-dark">Bicletas de ruta</Link></li>
                    <li className="nav-item"><Link to="/paseo" className="nav-link px-2 link-dark">Bicletas de paseo</Link></li>
                    <li className="nav-item"><Link to="/nosotros" className="nav-link px-2 link-dark">Nosotros</Link></li>
                    <li className="nav-item"><Link to="/contacto" className="nav-link px-2 link-dark">Contacto</Link></li>
                    <li className="nav-item"><Link to="/ayuda" className="nav-link px-2 link-dark">Ayuda</Link></li>
                </ul>
            </div>

            <CartWidget />
        </>
        )
    }else{
        return (
            <div className="navbar navbar-expand-lg " aria-label="Eighth navbar example">
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
                        <li><Link to="/home" className="nav-link px-2 link-dark">Home</Link></li>
                        <li><Link to="/productos" className="nav-link px-2 link-dark">Productos</Link></li>
                        <li><Link to="/nosotros" className="nav-link px-2 link-dark">Nosotros</Link></li>
                        <li><Link to="/contacto" className="nav-link px-2 link-dark">Contacto</Link></li>
                        <li><Link to="/ayuda" className="nav-link px-2 link-dark">Ayuda</Link></li>
                    </ul>
                </div>
            </div>
        )
    }

  }

export default NavBar;