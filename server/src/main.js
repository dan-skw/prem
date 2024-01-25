import express from "express";
import cors from "cors";
import { config } from "dotenv";
import router from "./router.js"; // Make sure to use the correct path

config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api", router); // Mount the user routes under '/api'

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
