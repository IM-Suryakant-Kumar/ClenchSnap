import { Router } from "express";
import { getLoggedInUser, updateUser } from "../controllers/user";

const router = Router();

router.route("/me").get(getLoggedInUser).patch(updateUser);

export default router;
