import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div id="inicio" className="text-center mt-5 pt-5">
      <div className="row">
        {/* Sección de la imagen */}
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <img
            src="https://i.imgur.com/75XdxcS.png"
            alt="Mi Portafolio"
            style={{
              maxWidth: "85%", // Cambiar el tamaño de la imagen
              height: "auto",
              backgroundColor: "white",
              borderRadius: "10px", // Agregar un borde estético
            }}
          />
        </div>

        {/* Sección de texto */}
        <div className="col-md-6 col-sm-12 mt-5 pt-5 text-center contenido-texto">
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
