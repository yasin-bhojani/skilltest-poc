import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes.js";

dotenv.config();
const app = express();
const port = 8080;

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
