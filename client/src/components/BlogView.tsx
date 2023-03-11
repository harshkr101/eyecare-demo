import React, { useState, useEffect, useCallback } from "react";
import { Container, Card } from "react-bootstrap";
import { Blog } from "../interfaces";
import { useParams } from "react-router";
import { configs } from "../config";
const API_URL: string = configs.API_URL + "/api";

export const BlogView: React.FC = () => {
  const [blog, setBlog] = useState<Blog>({
    _id: "",
    title: "",
    content: "",
    author: "",
  });
  const { id } = useParams();
  const getBlog = useCallback(async () => {
    const res = await fetch(`${API_URL}/blog/${id}`);
    if (res.ok) {
      const blogs = await res.json();
      setBlog(blogs.data);
    }
  }, [blog]);

  useEffect(() => {
    getBlog();
  }, [getBlog]);

  return (
    <div className="wrapper">
      <Container>
        <Card className="my-5">
          <Card.Body>
            <Card.Title className="text-center">{blog.title}</Card.Title>
            <Card.Text className="mt-5">{blog.content}</Card.Text>
            <br />
            <Card.Text> - {blog.author}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
