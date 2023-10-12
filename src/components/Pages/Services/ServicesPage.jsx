import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceItem from "./ServiceItem";

function ServicesPage() {
  const services = [
    {
      title: "Diseño Web",
      description: "Diseño de sitios web atractivos y funcionales.",
      icon: <i className="fas fa-desktop"></i>,
    },
    {
      title: "Desarrollo Frontend",
      description: "Desarrollo de interfaces de usuario interactivas.",
      icon: <i className="fas fa-code"></i>,
    },
    {
      title: "Desarrollo Backend",
      description: "Desarrollo de servidores y API con Node.js y Express.",
      icon: <i className="fas fa-server"></i>,
    },
    {
      title: "Bases de Datos",
      description: "Diseño y gestión de bases de datos MongoDB.",
      icon: <i className="fas fa-database"></i>,
    },
    {
      title: "Responsive Design",
      description: "Sitios web adaptables a dispositivos móviles y tablets.",
      icon: <i className="fas fa-mobile-alt"></i>,
    },
  ];

  return (
    <Container id="servicios" className="mt-5 pt-5">
      <h2>Mis Servicios</h2>
      <Row className="mt-5">
        {services.map((service, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <ServiceItem
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesPage;
