import express from "express";
import {
  allBookings,
  bookVisit,
  cancelBooking,
  createUser,
} from "../controllers/userController.js";

const router = express.Router();

// register a user
// method is post

router.post("/register", createUser);

// book a property the API method is post
router.post("/bookVisit/:id", bookVisit);

// get bookings of certain user API method is get
router.get("/allBookings", allBookings);

// cancel a bookinhg
router.post("/removeBooking/:id", cancelBooking);

export { router as userRoute };
