import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
export const Footer: React.FC = () => {
  return (
    <Container fluid className="bg-dark text-light py-5">
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs={12} md={8} lg={6}>
            <h2 className="text-center mb-3">Subscribe to Our Newsletter</h2>
            <Form>
              <Row className="align-items-end">
                <Col xs={12} md={8}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Button type="submit" className="w-100">
                    Subscribe
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2023 EyeCare Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
