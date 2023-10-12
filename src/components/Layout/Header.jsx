import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <div className="row w-100">
          <div className="col text-center">
            <a className="navbar-brand" href="/">
              Mi Sitio
            </a>
          </div>
          <div className="col text-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="inicio" smooth={true} duration={500}>
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                <Link to="sobre-mi" smooth={true} duration={500}>
                  SOBRE MI
                </Link>
              </li>
              <li className="nav-item">
                <Link to="mis-trabajos" smooth={true} duration={500}>
                  MIS TRABAJOS
                </Link>
              </li>
            </ul>
          </div>
          <div className="col text-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="servicios" smooth={true} duration={500}>
                  SERVICIOS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contacto" smooth={true} duration={500}>
                  CONTACTAME
                </Link>
              </li>
            </ul>
          </div>
          <div className="col text-center">
            <a
              className="btn btn-primary"
              href="/ruta/de/la/hoja-de-vida.docx"
              target="_blank"
              download
            >
              Descargar Hoja de Vida
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
