import { Router } from "express";
import {
	createPost,
	deletePost,
	editPost,
	getAllPosts,
} from "../controllers/post";
import { authenticateUser } from "../middleware";

const router = Router();

router
	.route("/")
	.get(getAllPosts)
	.post(authenticateUser, createPost)
	.patch(authenticateUser, editPost);

router.route("/:postId").delete(authenticateUser, deletePost);

export default router;
