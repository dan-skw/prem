import express from "express";
import cors from "cors";
import { config } from "dotenv";
import router from "./router.js";

config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
