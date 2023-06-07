import { Router } from "express";
import { register, login, authMail, test } from "../controller/auth";

const router = Router();

router.route("/login").post(login).get(test);
router.route("/register").post(register);
router.route("/authMail").get(authMail);

export default router;
