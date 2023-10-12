import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import HomePage from "../Pages/Home/HomePage";
import AboutMePage from "../Pages/AboutMe/AboutMePage";
import MyWorkPage from "../Pages/MyWork/MyWorkPage";
import ServicesPage from "../Pages/Services/ServicesPage";
import ContactMePage from "../Pages/ContactMe/ContactMePage";

function Main() {
  return (
    <main className="mt-4">
      <Link to="inicio" smooth={true} duration={500}>
        Inicio
      </Link>
      <Link to="sobre-mi" smooth={true} duration={500}>
        Sobre Mí
      </Link>
      <Link to="mis-trabajos" smooth={true} duration={500}>
        Mis Trabajos
      </Link>
      <Link to="servicios" smooth={true} duration={500}>
        Servicios
      </Link>
      <Link to="contacto" smooth={true} duration={500}>
        Contactame
      </Link>

      <Element name="inicio">
        <HomePage />
      </Element>
      <Element name="sobre-mi">
        <AboutMePage />
      </Element>
      <Element name="mis-trabajos">
        <MyWorkPage />
      </Element>
      <Element name="servicios">
        <ServicesPage />
      </Element>
      <Element name="contacto">
        <ContactMePage />
      </Element>
    </main>
  );
}

export default Main;
