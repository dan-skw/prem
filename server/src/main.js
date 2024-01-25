import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

const items = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
];

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
