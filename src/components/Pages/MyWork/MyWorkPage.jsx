import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectDetails from "./ProjectDetails";

function MyWorkPage() {
  const projects = [
    {
      id: 1,
      title: "LISTA DE TAREAS",
      description: "Descripción del primer proyecto.",
      image: "../../../../public/Imagenes/proyecto-1.png",
      appLink: "Enlace a la aplicación 1",
      githubLink: "Enlace al repositorio 1",
    },
    {
      id: 2,
      title: "APLICACION DE PELICULAS",
      description: "Descripción del segundo proyecto.",
      image: "../../../../public/Imagenes/proyecto-2.png",
      appLink: "Enlace a la aplicación 2",
      githubLink: "Enlace al repositorio 2",
    },
    {
      id: 3,
      title: "PRIMER PORTAFOLIO",
      description: "Descripción del tercer proyecto.",
      image: "../../../../public/Imagenes/proyecto-3.png",
      appLink: "Enlace a la aplicación 3",
      githubLink: "Enlace al repositorio 3",
    },
    {
      id: 4,
      title: "SEGUNDO PORTAFOLIO",
      description: "Descripción del cuarto proyecto.",
      image: "../../../../public/Imagenes/proyecto-4.png",
      appLink: "Enlace a la aplicación 4",
      githubLink: "Enlace al repositorio 4",
    },
  ];

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
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <button
                  className="btn btn-primary"
                  onClick={() => openProjectDetails(project)}
                >
                  Ver Detalles
                </button>
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
