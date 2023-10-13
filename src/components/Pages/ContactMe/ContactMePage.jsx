import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../fontAwesome";

function ContactMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para enviar el formulario o manejar los datos.
    console.log(formData);
    // Limpia los campos después del envío.
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsFormSubmitted(true);
  };

  return (
    <Container id="contacto" className="mt-5 pt-5">
      <h2 className="text-center mb-4">¡Contáctame!</h2>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
          {isFormSubmitted && (
            <Alert variant="success" className="mt-3">
              ¡El formulario se ha enviado con éxito!
            </Alert>
          )}
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="text-center">
              Información de Contacto
            </Card.Title>
            <Card.Body>
              <ul>
                <li>
                  <strong>Dirección:</strong> Medellin, Antioquia
                </li>
                <li>
                  <strong>Teléfono:</strong> (57) 3209202297
                </li>
                <li>
                  <strong>Correo Electrónico:</strong> kmilom19@gmail.com
                </li>
              </ul>
            </Card.Body>
            <Card.Title className="text-center mt-4">Redes Sociales</Card.Title>
            <Card.Body className="social-icons">
              <a href="URL-de-Gmail" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={["fab", "google"]}
                  className="text-primary"
                />
              </a>
              <a href="URL-de-GitHub" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className="text-primary"
                />
              </a>
              <a
                href="URL-de-LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="text-primary"
                />
              </a>
              <a
                href="URL-de-WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  className="text-primary"
                />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMePage;
