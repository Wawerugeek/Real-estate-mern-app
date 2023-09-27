import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidency,
} from "../controllers/residencyController.js";

const router = express.Router();

// register a residence/ make an endpoint
// method is post
router.post("/create", createResidency);

// get all residencies route
router.get("/allresidencies", getAllResidencies);

// get all specific property
router.get("/:id", getResidency);

export { router as residencyRoute };
