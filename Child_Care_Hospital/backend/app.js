import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();
config({ path: "./.env" });

app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// app.use((req, res, next) => {
//   if (!req.originalUrl.startsWith('/api/v1')) {
//     console.log(req.url);
    
//     req.url = '/api/v1' + req.url; // Prepend /api/v1 to the URL
//   }
//   next();
// });


app.use("/message", messageRouter);
app.use("/user", userRouter);
app.use("/appointment", appointmentRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
