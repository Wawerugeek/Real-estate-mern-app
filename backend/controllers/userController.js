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
