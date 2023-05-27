import { Router } from "express";
import { qrGenerater } from "../controller/qr";
const router = Router();

router.route("/").get(qrGenerater);

export default router;
