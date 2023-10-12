import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../fontAwesome";

function AboutMePage() {
  return (
    <Container id="sobre-mi" className="mt-5">
      <h2>Sobre Mí</h2>
      <Row className="mt-5">
        <Col xs={12} md={6} className="text-center">
          <Image
            src="/tu-foto.jpg" // Reemplaza con la URL de tu foto
            alt="Mi Foto"
            fluid
          />
          <div className="social-icons mt-3">
            <a href="URL-de-Gmail" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "google"]} />
            </a>
            <a href="URL-de-GitHub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="URL-de-LinkedIn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a href="URL-de-WhatsApp" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </a>
            {/* Agrega más iconos de redes sociales o contactos según sea necesario */}
          </div>
        </Col>
        <Col xs={12} md={6}>
          <p>
            ¡Hola! Soy [Tu Nombre], un apasionado desarrollador web con
            experiencia en tecnologías como React, Node.js, HTML, CSS y mucho
            más. Me encanta crear aplicaciones web impresionantes y resolver
            problemas desafiantes.
          </p>
          <p>
            Mi objetivo es construir productos web de alta calidad que sean
            efectivos y atractivos. Estoy disponible para proyectos emocionantes
            y colaboraciones. Siempre estoy aprendiendo y explorando nuevas
            tecnologías para mantenerme actualizado en este mundo en constante
            evolución.
          </p>
          <Button
            variant="primary"
            href="/ruta-de-tu-resume.pdf"
            target="_blank"
            download
          >
            Descargar Mi Currículum
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMePage;
