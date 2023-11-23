import { Router } from "express";
import { getLoggedInUser, updateUser } from "../controllers/user";
import { authenticateUser } from "../middleware";

const router = Router();

router
	.route("/me")
	.get(authenticateUser, getLoggedInUser)
	.patch(authenticateUser, updateUser);

export default router;
