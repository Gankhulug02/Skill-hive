import express, { Router } from "express";
import { getUsers, getUser, createUser, editUser } from "../controller/user";

const router = Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(editUser);

export default router;
