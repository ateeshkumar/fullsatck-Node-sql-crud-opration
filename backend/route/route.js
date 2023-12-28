import express from "express";
import {
  createBlogController,
  deleteBlogController,
  getBlogController,
  getSingleBlogController,
  updateBlogController,
} from "../controller/blogController.js";

const route = express.Router();

route.post("/create", createBlogController);
route.get("/get", getBlogController);
route.put("/update/:id", updateBlogController);
route.get("/get/:id", getSingleBlogController);
route.delete("/delete/:id", deleteBlogController);

export default route;
