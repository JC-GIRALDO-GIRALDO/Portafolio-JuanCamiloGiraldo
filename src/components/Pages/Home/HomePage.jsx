import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div id="inicio" className="mt-5 pt-5">
      <div className="row">
        {/* Sección de la imagen */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="../../../../public/Imagenes/fondo-10.png" // Reemplaza con la ruta de tu imagen
            alt="Mi Portafolio"
            style={{ maxWidth: "50%", height: "auto" }} // Establece el estilo en línea para la imagen
          />
        </div>

        {/* Sección de texto */}
        <div className="col-md-6 mt-5 mr-3 text-center contenido-texto">
          {/* Agrega la clase mr-3 para margen a la derecha */}
          <h3>Bienvenido a mi Portafolio</h3>
          <h2>Yo soy, Juan Giraldo</h2>
          <h4>Desarrollador Full Stack</h4>
          <p>
            Exploro el aprendizaje continuo y canalizo mi pasión a través de
            proyectos que trascienden la rutina laboral en mi vida cotidiana.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
