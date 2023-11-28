import { Router } from "express";
import { createPost, editPost, getAllPosts } from "../controllers/post";

const router = Router();

router.route("/").get(getAllPosts).post(createPost).patch(editPost);

export default router;
