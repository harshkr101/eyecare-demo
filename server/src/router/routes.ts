import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getBlog,
  updateBlog,
} from "../controller/blog";

const router = express.Router();

router.route("/blog").post(createBlog);
router.route("/blog/:id").get(getBlog).delete(deleteBlog).put(updateBlog);
router.get("/blogs", getBlogs);

export default router;
