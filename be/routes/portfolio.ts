import { Router } from "express";
import { addPortfolio } from "../controller/portfolio";

const router = Router();

router.route("/:id").put(addPortfolio);

export default router;
