import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Blog } from "../interfaces";
import { configs } from "../config";
const API_URL: string = configs.API_URL + "/api";
export const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch(`${API_URL}/blogs`);
      if (res.ok) {
        const blogs = await res.json();
        setBlogs(blogs.data);
      }
    };

    getBlogs();
  }, []);

  return (
    <div className="wrapper my-5 ">
      <Container>
        <Row>
          {blogs.map((blog) => (
            <Col key={blog._id} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    <a href={"/blog/" + blog._id}>{blog.title}</a>
                  </Card.Title>
                  <Card.Text>{blog.content.substring(0, 150)}...</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
