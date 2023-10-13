import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h4>Juan Camilo Giraldo</h4>
            <h6>Full Stack Developer</h6>
          </div>
          <div className="col-12 mt-5">
            <h4>Enlaces Rápidos</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="inicio" smooth={true} duration={500}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="sobre-mi" smooth={true} duration={500}>
                  Sobre-Mi
                </Link>
              </li>
              <li>
                <Link to="mis-trabajos" smooth={true} duration={500}>
                  Mis-Trabajos
                </Link>
              </li>
              <li>
                <Link to="servicios" smooth={true} duration={500}>
                  Servicios
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 mt-4">
            <div className="col-12 mt-5">
              <p>&copy; {new Date().getFullYear()} Juan Camilo Giraldo. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
