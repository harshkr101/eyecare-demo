import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlogs,
  getBlog,
  updateBlog,
} from "../controller/blog";

const router = express.Router();

router.route("/blog/:id").get(getBlog).delete(deleteBlog);
router.route("/blog").post(createBlog).put(updateBlog);
router.get("/blog/all", getBlogs);

export default router;
