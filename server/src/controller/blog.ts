import Blog from "../models/blog";
import { Request, Response } from "express";

interface Blog {
  title: string;
  content: string;
  author: string;
}

// Create a new Blog

export const createBlog = async (req: Request, res: Response) => {
  try {
    const data: Blog = req.body;
    if (!data) {
      res.status(400).end();
    }
    const blog = await Blog.create({ ...data });
    if (blog) {
      res.status(201).json({ data: blog });
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

// Get Blog by ID
export const getBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).end();
    }
    const blog: Blog = await Blog.findById({ _id: id });
    if (blog) {
      res.status(200).json({ data: blog });
    } else {
      res.status(404).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

// Update existing blog

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const data: Blog = req.body;
    const id = req.params.id;
    if (!data || !id) {
      res.status(400).end();
    }
    const blog = await Blog.findByIdAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    )
      .lean(true)
      .exec();
    if (blog) {
      res.status(200).json({ data: blog });
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

// Delete existing Blog

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).end();
    }
    const blog: Blog = await Blog.findOneAndDelete({ _id: id });
    if (blog) {
      res.status(200).json({ data: blog });
    } else {
      res.status(404).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

// GET all blogs
export const getBlogs = async (req: Request, res: Response) => {
  try {
    // get all blogs sorted by creation time in descending order
    const blogs: Blog[] = await Blog.find({}).sort({ createdAt: -1 });
    if (blogs.length > 0) {
      res.status(200).json({ data: blogs });
    } else {
      res.status(404).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};
