import express from "express";
import { createUser, getUsers, getUser, getAdminUser } from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/admin", getAdminUser);
router.get("/:id", getUser);
router.post("/create-user", createUser);

export default router;
