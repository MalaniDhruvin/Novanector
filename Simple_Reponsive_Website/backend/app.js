import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./src/routes/user.routes.js"

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

export { app };
