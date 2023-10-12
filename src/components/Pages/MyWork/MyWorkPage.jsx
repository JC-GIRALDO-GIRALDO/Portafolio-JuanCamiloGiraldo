import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectDetails from "./ProjectDetails";

function MyWorkPage() {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción del primer proyecto.",
      image: "ruta-de-la-imagen-1.jpg",
      link: "/project/1",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción del segundo proyecto.",
      image: "ruta-de-la-imagen-2.jpg",
      link: "/project/2",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Descripción del tercer proyecto.",
      image: "ruta-de-la-imagen-3.jpg",
      link: "/project/3",
    },
    {
      id: 4,
      title: "Proyecto 4",
      description: "Descripción del cuarto proyecto.",
      image: "ruta-de-la-imagen-4.jpg",
      link: "/project/4",
    },
  ];

  // Establece un proyecto por defecto (por ejemplo, el primero en la lista).
  const defaultProject = projects[0];

  const [selectedProject, setSelectedProject] = useState(defaultProject);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <Container id="mis-trabajos" className="mt-5 pt-5">
      <h2 className="mt-5">Mis Trabajos</h2>
      <Row className="mt-5">
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4} xl={3}>
            <Card>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => openProjectDetails(project)}
                >
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )}
    </Container>
  );
}

export default MyWorkPage;
