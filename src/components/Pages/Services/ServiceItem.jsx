import React from "react";
import { Card } from "react-bootstrap";

function ServiceItem({ title, description, icon }) {
  return (
    <Card className="mb-4">
      <div className="service-icon">{icon}</div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceItem;
