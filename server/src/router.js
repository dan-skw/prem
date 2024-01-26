import express from "express";
import { getUser, updateUser } from "./controllers/userController.js";
import {
  addReservation,
  getReservations,
} from "./controllers/reservationController.js";
import {
  addEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployeeData,
} from "./controllers/employeeController.js";

const router = express.Router();

router.get("/user/:uid", getUser);
router.put("/user/:uid", updateUser);
router.post("/reservations", addReservation);
router.get("/reservations/:date", getReservations);
router.post("/employees", addEmployee);
router.get("/employees", getAllEmployees);
router.get("/employees/:id", getEmployee);
router.put("/employees/:id", updateEmployeeData);

export default router;
