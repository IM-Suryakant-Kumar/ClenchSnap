import { Router } from "express";
import { createUser, login, logout } from "../controllers/auth";

const router = Router()

router.route("/register").post(createUser)
router.route("/login").post(login)
router.route("/logout").get(logout)

export default router