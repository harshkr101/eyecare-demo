import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Contact: React.FC = () => {
  return (
    <div className="wrapper">
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-end">
                <Col xs={12} md={4}>
                  <Button type="submit" className="w-100 mt-5">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
