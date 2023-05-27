import express, { Router } from "express";
import {
  getCategories,
  getCategory,
  createCategory,
  uptadeCategory,
  deleteCategory,
} from "../controller/category";

const router = Router();

router.route("/").get(getCategories).post(createCategory);
router
  .route("/:id")
  .get(getCategory)
  .put(uptadeCategory)
  .delete(deleteCategory);

export default router;
