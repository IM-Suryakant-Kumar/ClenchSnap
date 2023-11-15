import { Router } from "express";
import { createUser, login, logout } from "../controllers/auth";
import { authenticateUser } from "../middleware/authentication";

const router = Router();

router.route("/register").post(createUser);
router.route("/login").post(login);
router.route("/logout").get(authenticateUser, logout);

export default router;
