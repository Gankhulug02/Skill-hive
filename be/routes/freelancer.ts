import express, { Router } from "express";
import {
  getFreelancers,
  getFreelancer,
  createFreelancer,
  deleteFreelancer,
  editFreelancer,
} from "../controller/freelancer";

const router = Router();

router.route("/").get(getFreelancers).post(createFreelancer);
router
  .route("/:id")
  .get(getFreelancer)
  .delete(deleteFreelancer)
  .put(editFreelancer);

export default router;
