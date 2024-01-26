import express from "express";
import { getUser, updateUser } from "./controllers/userController.js";
import {
  addReservation,
  getReservations,
} from "./controllers/reservationController.js";

const router = express.Router();

router.get("/user/:uid", getUser);
router.put("/user/:uid", updateUser);
router.post("/reservations", addReservation);
router.get("/reservations/:date", getReservations);

export default router;
