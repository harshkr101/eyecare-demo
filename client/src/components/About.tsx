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
              EyeCare is a leading eyewear brand that provides stylish,
              high-quality glasses at an affordable price. We believe that
              everyone should have access to comfortable, fashionable eyewear
              that fits their unique style and personality.
            </p>
            <p>
              Our team of experienced designers and opticians work tirelessly to
              create frames that not only look great but also provide maximum
              comfort and durability. We use only the highest-quality materials
              and state-of-the-art technology to ensure that our glasses are the
              best in the market.
            </p>
            <p>
              At EyeCare, we are committed to providing exceptional customer
              service and ensuring that our customers are always satisfied with
              their purchase. We offer free shipping and a hassle-free return
              policy, so you can shop with confidence.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
