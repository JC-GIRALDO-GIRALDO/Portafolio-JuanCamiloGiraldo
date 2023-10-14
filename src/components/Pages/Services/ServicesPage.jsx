import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ServicesPage.css"; // Importa tu archivo CSS personalizado

function ServicesPage() {
  const services = [
    {
      title: "Diseño Web",
      description: "Diseño de sitios web atractivos y funcionales.",
      imageUrl: "https://i.imgur.com/TguLcNw.png",
    },
    {
      title: "Desarrollo Frontend",
      description: "Desarrollo de interfaces de usuario interactivas.",
      imageUrl: "https://i.imgur.com/dyyKAxv.png",
    },
    {
      title: "Desarrollo Backend",
      description: "Desarrollo de servidores y API con Node.js y Express.",
      imageUrl: "https://i.imgur.com/3D6qsMP.png",
    },
    {
      title: "Bases de Datos",
      description:
        "Diseño y gestión de bases de datos MongoDB no relacionales.",
      imageUrl: "https://i.imgur.com/T9cuZ8e.png",
    },
    {
      title: "Responsive Design",
      description: "Sitios web adaptables a dispositivos móviles y tablets.",
      imageUrl: "https://i.imgur.com/DaCwV5q.png",
    },
    {
      title: "Diseño Gráfico",
      description:
        "Creación de gráficos atractivos y creativos para tus proyectos visuales.",
      imageUrl: "https://i.imgur.com/Jvzp5CN.png",
    },
  ];

  return (
    <Container id="servicios" className="text-center mt-5 pt-5">
      <h2>Mis Servicios</h2>
      <Row className="mt-5">
        {services.map((service, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src={service.imageUrl}
                alt={service.title}
                style={{ objectFit: "cover", height: "200px" }} // Ajustar la altura
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
