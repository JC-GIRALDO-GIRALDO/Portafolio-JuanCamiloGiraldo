import React from "react";

function HomePage() {
  return (
    <div className="mt-5 pt-5">
      <div className="row">
        {/* Sección de la imagen */}
        <div className="col-md-6 mt-5">
          <img
            src="/ruta-de-tu-imagen.jpg" // Reemplaza con la ruta de tu imagen
            alt="Mi Portafolio"
            className="img-fluid"
          />
        </div>

        {/* Sección de texto */}
        <div className="col-md-6 mt-5">
          <h2>Bienvenido a mi Portafolio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            massa eget mi varius bibendum.
          </p>
          <p>
            Sed quis nisi sit amet mi cursus tincidunt. Vivamus eu nulla vel
            dolor condimentum posuere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
