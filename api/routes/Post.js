import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/PostController.js";

const route = express.Router();

route.post("/", createPost);
route.put("/:id", updatePost);
route.delete("/:id", deletePost);
route.get("/:id", getPost);
route.get("/", getPosts);

export default route;
