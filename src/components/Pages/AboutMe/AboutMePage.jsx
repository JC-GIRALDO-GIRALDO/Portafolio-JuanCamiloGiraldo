import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../fontAwesome";
import "./AboutMePage.css";

function AboutMePage() {
  return (
    <Container id="sobre-mi" className="mt-5 pt-5">
      <h2 className="text-center mt-5 pt-5 sobreMi">Sobre Mí</h2>
      <Row className="mt-5">
        <Col xs={12} md={4} className="order-md-2">
          <div className="about-image">
            <img
              src="../../../../public/Imagenes/Foto-Camilo-port.png"
              alt="Mi Foto"
              fluid="true"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="social-icons">
              <a href="URL-de-Gmail" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={["fab", "google"]}
                  className="text-white"
                />
              </a>
              <a href="URL-de-GitHub" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className="text-white"
                />
              </a>
              <a
                href="URL-de-LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="text-white"
                />
              </a>
              <a
                href="URL-de-WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  className="text-white"
                />
              </a>
              {/* Agrega más iconos de redes sociales o contactos según sea necesario */}
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="order-md-1">
          <div className="about-text">
            <p>
              ¡Hola! Soy un apasionado desarrollador web con experiencia en
              tecnologías como React, Node.js, HTML, CSS y mucho más. Me encanta
              crear aplicaciones web impresionantes y resolver problemas
              desafiantes.
            </p>
            <p>
              Mi objetivo es construir productos web de alta calidad que sean
              efectivos y atractivos. Estoy disponible para proyectos
              emocionantes y colaboraciones. Siempre estoy aprendiendo y
              explorando nuevas tecnologías para mantenerme actualizado en este
              mundo en constante evolución.
            </p>
            <Button
              variant="primary"
              href="../../../../public/CV_JUAN_CAMILO_GIRALDO.docx"
              target="_blank"
              download
            >
              Descargar CV
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMePage;
