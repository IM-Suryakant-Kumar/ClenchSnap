import { Router } from "express";
import { getLoggedInUser } from "../controllers/user";

const router = Router();

router.route("/me").get(getLoggedInUser);

export default router;
