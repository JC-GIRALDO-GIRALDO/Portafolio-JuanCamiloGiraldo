import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function MyWorkPage() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del primer proyecto.",
      image: "ruta-de-la-imagen-1.jpg", // Reemplaza con la ruta de la imagen
      link: "enlace-al-proyecto-1", // Reemplaza con el enlace al proyecto
    },
    {
      title: "Proyecto 2",
      description: "Descripción del segundo proyecto.",
      image: "ruta-de-la-imagen-2.jpg", // Reemplaza con la ruta de la imagen
      link: "enlace-al-proyecto-2", // Reemplaza con el enlace al proyecto
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <Container className="mt-5 pt-5">
      {/* mt-5 añade espacio superior, pt-5 agrega espacio a la parte superior del Container */}
      <h2 className="mt-5">Mis Trabajos</h2>{" "}
      {/* mt-5 agrega espacio superior al h2 */}
      <Row className="mt-5">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} xl={3}>
            <Card>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  Ver Proyecto
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MyWorkPage;
