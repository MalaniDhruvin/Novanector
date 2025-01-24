import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  createRecruiter,
  verifyRecruiter,
  createJob,
} from "../controllers/recruiter.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(upload.single("document"), createRecruiter);
router.route("/verify").get(authMiddleware, verifyRecruiter);
router.route("/createJob").post(authMiddleware, createJob);

export default router;
