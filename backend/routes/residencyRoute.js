import express from "express";
import { createResidency, getAllResidencies } from "../controllers/residencyController.js";

const router = express.Router();

// register a residence/ make an endpoint
// method is post
router.post("/create", createResidency)

// get all residencies route
router.get("/allresidencies", getAllResidencies)

export { router as residencyRoute}
