import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={5}>
            <div className="m-5">
              <h1>Help someone see better</h1>
              <p className="lead">
                EyeCare offers a wide variety of products to help visually
                impaired people see better
              </p>
            </div>
          </Col>
          <Col xs={12} md={7}>
            <img
              src="https://images.unsplash.com/photo-1546914782-96b636ea44e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="eyeglasses"
              className="img-fluid top-img"
              style={{ height: "80%", width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h2 className="text-center mb-5">EyeCare to Rescue!</h2>
        <Row>
          <h5 className="text-center mb-5">
            Our app helps people in their day to day life using Artificial
            Intelligence
          </h5>
        </Row>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://miro.medium.com/max/739/0*zBJfOmnNafCIBdnM.png"
              />
              <Card.Body>
                <Card.Title>Object Detection</Card.Title>
                <Card.Text>
                  Our app helps people by detecting objects in their daily life
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1663430186148-e7e69b15ad85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              />
              <Card.Body>
                <Card.Title>Navigation</Card.Title>
                <Card.Text>
                  With read aloud navigation technology we help people navigate
                  better
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1506953752663-add60014e80e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Document Reader</Card.Title>
                <Card.Text>
                  Our app helps people with their reading needs according to
                  their convenience
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h2 className="text-center mb-5">Our Services</h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1612226192563-397d89f61b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Eye Exams</Card.Title>
                <Card.Text>
                  Our experienced optometrists provide comprehensive eye exams
                  to help you maintain good eye health
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Community Support</Card.Title>
                <Card.Text>
                  We are a strong community of 1000+ people and still growing
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
