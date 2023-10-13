import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ServicesPage.css"; // Importa tu archivo CSS personalizado

function ServicesPage() {
  const services = [
    {
      title: "Diseño Web",
      description: "Diseño de sitios web atractivos y funcionales.",
      imageUrl: "../../../../public/Imagenes/Diseno-Web.png",
    },
    {
      title: "Desarrollo Frontend",
      description: "Desarrollo de interfaces de usuario interactivas.",
      imageUrl: "../../../../public/Imagenes/Desarrollo-Frontend.png",
    },
    {
      title: "Desarrollo Backend",
      description: "Desarrollo de servidores y API con Node.js y Express.",
      imageUrl: "../../../../public/Imagenes/Desarrollo-Backend.png",
    },
    {
      title: "Bases de Datos",
      description: "Diseño y gestión de bases de datos MongoDB.",
      imageUrl: "../../../../public/Imagenes/Bases-de-Datos.png",
    },
    {
      title: "Responsive Design",
      description: "Sitios web adaptables a dispositivos móviles y tablets.",
      imageUrl: "../../../../public/Imagenes/Responsive-Design.png",
    },
    {
      title: "Diseño Gráfico",
      description: "Descripción del nuevo servicio que ofreces.",
      imageUrl: "../../../../public/Imagenes/Diseno-Grafico.png",
    },
  ];

  return (
    <Container id="servicios" className="mt-5 pt-5">
      <h2>Mis Servicios</h2>
      <Row className="mt-5">
        {services.map((service, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src={service.imageUrl}
                alt={service.title}
              />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesPage;
