import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connetDB } from "./config/db.js";
import route from "./route/route.js";
import cors from "cors";
dotenv.config();

connetDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Nodejs MySql Crud opration");
});

app.use("/api/v1/blog", route);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
