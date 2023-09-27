import express from "express";
import { createUser } from "../controllers/userController.js";

const router = express.Router();

// register a user
// method is post

router.post("/register", createUser);

export { router as userRoute}
