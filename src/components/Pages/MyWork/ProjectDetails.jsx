import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MyWorkPage.css";

function ProjectDetails({ project, onClose, onPrevious, onNext }) {
  const navigateToPreviousProject = () => {
    onPrevious();
  };

  const navigateToNextProject = () => {
    onNext();
  };

  return (
    <div className="project-details">
      <Card>
        <Card.Img variant="top" src={project.image} alt={project.title} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <div className="button-container">
            <div className="button-group">
              <Button variant="secondary" className="previous-button" onClick={navigateToPreviousProject}>
                Proyecto Anterior
              </Button>
              <Button variant="primary" href={project.appLink} target="_blank">
                Ir a la Aplicación
              </Button>
              <Button variant="secondary" href={project.githubLink} target="_blank">
                Repositorio en GitHub
              </Button>
              <Button variant="danger" className="close-button" onClick={onClose}>
                Cerrar
              </Button>
              <Button variant="secondary" className="next-button" onClick={navigateToNextProject}>
                Proyecto Siguiente
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectDetails;
