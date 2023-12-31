import express from "express";
import {
  allBookings,
  allFav,
  bookVisit,
  cancelBooking,
  createUser,
  fav,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

// register a user
// method is post

router.post("/register", jwtCheck, createUser);

// book a property the API method is post
router.post("/bookVisit/:id", jwtCheck, bookVisit);

// get bookings of certain user API method is get
router.get("/allBookings", allBookings);

// cancel a bookinhg
router.post("/removeBooking/:id", jwtCheck, cancelBooking);

// add to favourite bookings
router.post("/toFav/:rid", jwtCheck, fav);

// get all favourite residencies
router.get("/allFav", jwtCheck, allFav);

export { router as userRoute };
