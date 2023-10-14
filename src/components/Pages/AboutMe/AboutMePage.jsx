import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../fontAwesome";
import "./AboutMePage.css";

function AboutMePage() {
  return (
    <Container id="sobre-mi" className="mt-5">
      <h2 className="text-center mt-5 pt-5">Sobre Mí</h2>
      <Row className="mt-5">
        <Col xs={12} md={6} className="mt-4 text-center">
          <div
            className="about-text"
            style={{
              backgroundColor: "#007bff",
              padding: "20px",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "1.2rem",
            }}
          >
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
          </div>
          <div
            className="social-icons-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centra verticalmente los iconos
              marginTop: "20px",
            }}
          >
            <div className="social-icons">
              <a
                href="mailto:kmilom19@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "google"]}
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    borderRadius: "50%",
                    padding: "10px",
                    background: "black",
                  }}
                />
              </a>
              <a
                href="https://github.com/JC-GIRALDO-GIRALDO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    borderRadius: "50%",
                    padding: "10px",
                    background: "black",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-camilo-giraldo-desarrollador/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    borderRadius: "50%",
                    padding: "10px",
                    background: "black",
                  }}
                />
              </a>
              <a
                href="https://wa.me/3209202297"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    borderRadius: "50%",
                    padding: "10px",
                    background: "black",
                  }}
                />
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="primary"
              href="../../../../public/CV_JUAN_CAMILO_GIRALDO.docx"
              target="_blank"
              download
              style={{ width: "60%" }}
            >
              Descargar CV
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="about-image mx-auto">
            {/* Añade la clase mx-auto para centrar horizontalmente */}
            <img
              src="https://i.imgur.com/RBna8oh.jpg"
              alt="Mi Foto"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMePage;
