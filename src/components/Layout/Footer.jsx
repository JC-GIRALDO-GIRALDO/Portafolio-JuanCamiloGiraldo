import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container-fluid py-4">
        <div className="d-flex align-items-center">
          <div>
            <h4>Información de Contacto</h4>
            <p>Dirección: Medellin Antioquia</p>
            <p>Teléfono: (57) 3209202297</p>
            <p>Correo Electrónico: kmilom19@gmail.com</p>
          </div>
          <div className="ml-auto">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/about">Sobre Nosotros</a>
              </li>
              <li>
                <a href="/services">Servicios</a>
              </li>
              <li>
                <a href="/contact">Contáctanos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
