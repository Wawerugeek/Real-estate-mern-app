import asyncHandler from "express-async-handler";
import prisma from "../config/prismaConfig.js";

// controller to create a user
export const createUser = asyncHandler(async (req, res) => {
  console.log("creating user");

  let { email } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "user created successfully",
      user: user,
    });
  } else res.status(201).send({ message: "user exists / already registered" });
});

// function to book a  visit
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json({ message: "You booked this residence!" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: { bookedVisits: { push: { id, date } } },
      });
    }
    res.send("Your booking was successful!");
  } catch (err) {
    throw new Error(err.message);
  }
});

// get all bookings of certain user
export const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings);
  } catch (err) {
    throw new Error(err.message);
  }
});

// cancel bookings
export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });
    const index = user.bookedVisits.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(400).json({ message: "No such booking" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
      res.send("Booking canceled successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// add favourites residents, method is post
export const fav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user.favResidenceID.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenceID: {
            set: user.favResidenceID.filter((id) => id !== rid),
          },
        },
      });
      res.send({ message: "removed from Favourites!", user: updateUser });
    } else {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenceID: {
            push: rid,
          },
        },
      });
      res.send({ message: "Added to favourites", user: updateUser });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// get all favourites methdd is get
export const allFav = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const favRes = await prisma.user.findUnique({
      where: { email },
      select: { favResidenceID: true },
    });
    res.status(200).send(favRes);
  } catch (err) {
    throw new Error(err.message);
  }
});
