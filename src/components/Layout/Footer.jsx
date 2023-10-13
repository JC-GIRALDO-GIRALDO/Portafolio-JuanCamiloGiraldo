import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h4>Enlaces Rápidos</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/about" className="text-light">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/services" className="text-light">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 mt-4">
            <h4>Información Adicional</h4>
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
              <p className="text-center">
                Somos una empresa comprometida con la excelencia. Nuestra misión
                es brindar soluciones innovadoras a nuestros clientes y superar
                sus expectativas. Estamos aquí para ayudarte a alcanzar tus
                objetivos con tecnología de vanguardia y un equipo de expertos
                apasionados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
