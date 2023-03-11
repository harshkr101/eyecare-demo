import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const About: React.FC = () => {
  return (
    <div className="wrapper">
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2 className="text-center mb-4">About Us</h2>
            <p>
              Welcome to our eyecare company, where we specialize in providing
              cutting-edge solutions for visually impaired individuals. Our
              mission is to improve the quality of life for those with visual
              impairments by using the latest technology to enhance their
              vision. We understand that living with visual impairment can be
              challenging, and we are committed to helping individuals overcome
              these challenges.
            </p>
            <p>
              Our team of experts consists of highly trained optometrists,
              ophthalmologists, and engineers who work together to develop
              customized solutions for each individual. Using advanced
              technology such as artificial intelligence, machine learning, and
              computer vision, we are able to analyze and enhance visual input
              in real-time. Our products and services include visual aids, such
              as magnifiers, screen readers, and wearable devices, that can help
              individuals with low vision see more clearly.
            </p>
            <p>
              {" "}
              We also offer personalized consultations and training programs to
              help individuals adapt to their visual impairment and learn new
              strategies for daily living. Our goal is to empower visually
              impaired individuals to lead independent and fulfilling lives. At
              our eyecare company, we are dedicated to providing the highest
              level of care and support to our clients. We strive to stay at the
              forefront of technological advancements and to continuously
              improve our services to meet the unique needs of each individual.
            </p>
            <p>
              Thank you for considering our eyecare company as your partner in
              enhancing your vision and improving your quality of life. We look
              forward to working with you to achieve your visual goals.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
