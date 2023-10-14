import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectDetails from "./ProjectDetails";

function MyWorkPage() {
  const projects = [
    {
      id: 1,
      title: "LISTA DE TAREAS",
      description:
        "Una aplicación de lista de tareas hecha con React que te ayuda a mantener tus tareas organizadas y productivas. Añade, elimina y marca tareas completadas de manera eficiente.",
      image: "https://i.imgur.com/tXdrlSN.png",
      appLink: "https://my-react-task-list.vercel.app/",
      githubLink:
        "https://github.com/JC-GIRALDO-GIRALDO/my-react-task-list.git",
    },
    {
      id: 2,
      title: "APLICACION DE PELICULAS",
      description:
        "Una página de películas construida en React que te permite explorar y descubrir películas emocionantes. Busca, filtra y disfruta de tus películas favoritas en un solo lugar.",
      image: "https://i.imgur.com/HZ7zNWg.png",
      appLink: "Enlace a la aplicación 2",
      githubLink: "Enlace al repositorio 2",
    },
    {
      id: 3,
      title: "PRIMER PORTAFOLIO",
      description:
        "Un portafolio personal desarrollado en React para destacar mis proyectos y habilidades. Muestra mi trabajo y experiencia.",
      image: "https://i.imgur.com/MJ3P4yK.png",
      appLink: "Enlace a la aplicación 3",
      githubLink: "Enlace al repositorio 3",
    },
    {
      id: 4,
      title: "SEGUNDO PORTAFOLIO",
      description:
        " Un portafolio interactivo en React que muestra mi trabajo y experiencia de manera atractiva, destacando mis logros y habilidades en el diseño y desarrollo web.",
      image: "https://i.imgur.com/FhQgJLW.png",
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

  const navigateToPreviousProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject.id
    );
    const previousIndex =
      (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[previousIndex]);
  };

  const navigateToNextProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject.id
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  return (
    <Container id="mis-trabajos" className="mt-4 ">
      <h2 className="text-center mt-5 pt-5">Mis Trabajos</h2>
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
          onPrevious={navigateToPreviousProject}
          onNext={navigateToNextProject}
        />
      )}
    </Container>
  );
}

export default MyWorkPage;
