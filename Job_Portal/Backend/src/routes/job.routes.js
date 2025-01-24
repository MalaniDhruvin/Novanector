import { Router } from "express";
import { getJobs } from "../controllers/job.contoller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getJobs").get(authMiddleware, getJobs);

export default router;
