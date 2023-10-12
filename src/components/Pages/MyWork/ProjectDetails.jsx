import React from "react";
import { Card } from "react-bootstrap";

function ProjectDetails({ project, onClose }) {
  return (
    <div className="project-details">
      <Card>
        <Card.Img variant="top" src={project.image} alt={project.title} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <button onClick={onClose}>Cerrar</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectDetails;
