import { Router } from "express";
import { register, login, authMail } from "../controller/auth";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/authMail").get(authMail);

export default router;
