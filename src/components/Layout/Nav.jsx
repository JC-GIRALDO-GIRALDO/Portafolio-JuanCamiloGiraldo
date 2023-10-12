import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
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
                <NavLink className="nav-link" to="/">
                  INICIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AboutMePage">
                  SOBRE MI
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/MyWorkPage">
                  MIS TRABAJOS
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col text-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/ServicesPage">
                  SERVICIOS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ContactMePage">
                  CONTACTAME
                </NavLink>
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

export default Nav;
