import { Router } from "express";
import { createUser, guestLogin, login, logout } from "../controllers/auth";
import { authenticateUser } from "../middleware";

const router = Router();

router.route("/register").post(createUser);
router.route("/login").post(login);
router.route("/guest-login").get(guestLogin);
router.route("/logout").get(authenticateUser, logout);

export default router;
