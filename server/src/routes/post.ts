import { Router } from "express";
import { createPost, editPost, getAllPosts } from "../controllers/post";
import { authenticateUser } from "../middleware";

const router = Router();

router.route("/").get(getAllPosts).post(authenticateUser, createPost).patch(authenticateUser, editPost);

export default router;
