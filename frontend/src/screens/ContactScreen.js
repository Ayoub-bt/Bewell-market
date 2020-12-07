import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-5">
      <Container>
        <h1 className="mb-5 text-center">Contactez nous</h1>
        <Form onSubmit={submitHandler} className="mt-3">
          <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
              {/* Name */}
              <Form.Group controlId="name">
                <Form.Control
                  type="text"
                  placeholder="Entrer votre nom complet..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              {/* Email */}
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Entrer votre email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={8}>
              {/* Phone */}
              <Form.Group controlId="email">
                <Form.Control
                  type="text"
                  placeholder="Entrer votre numero..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* Message */}
              <Form.Group controlId="message">
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Entrer votre message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" className="login-btn" variant="contained">
                Envoyer
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default ContactScreen;
