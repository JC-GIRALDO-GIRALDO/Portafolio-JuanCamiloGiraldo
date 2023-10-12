import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function AboutMePage() {
  return (
    <Container className="mt-5">
      <h2>Sobre Mí</h2>
      <Row className="mt-5">
        <Col xs={12} md={6}>
          <Image
            src="/tu-foto.jpg" // Reemplaza con la URL de tu foto
            alt="Mi Foto"
            fluid
          />
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
