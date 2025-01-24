import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import candidateRouter from "./src/routes/candidate.routes.js";
import recruiterRouter from "./src/routes/recruiter.routes.js";
import publicRouter from "./src/routes/public.routes.js";
import jobRouter from "./src/routes/job.routes.js";

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/v1/candidate", candidateRouter);
app.use("/api/v1/recruiter", recruiterRouter);
app.use("/api/v1", publicRouter);
app.use("/api/v1/job", jobRouter);

export { app };
