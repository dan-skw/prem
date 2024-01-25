import express from "express";
import { getUser, updateUser } from "./controllers/userController.js";

const router = express.Router();

router.get("/user/:uid", getUser);
router.put("/user/:uid", updateUser);

export default router;
