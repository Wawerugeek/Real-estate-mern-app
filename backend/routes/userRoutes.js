import express from "express";
import {
  allBookings,
  allFav,
  bookVisit,
  cancelBooking,
  createUser,
  fav,
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

// add to favourite bookings
router.post("/toFav/:rid", fav);

// get all favourite residencies
router.get("/allFav", allFav);

export { router as userRoute };
