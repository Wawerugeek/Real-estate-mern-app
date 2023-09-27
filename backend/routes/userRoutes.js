import express from "express";
import { bookVisit, createUser } from "../controllers/userController.js";

const router = express.Router();

// register a user
// method is post

router.post("/register", createUser);

// book a property the API method is post
router.post("/bookVisit/:id", bookVisit);

export { router as userRoute };
