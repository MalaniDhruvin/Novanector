import { Router } from "express";
import { createCandidate,verifyCandidate,applyJob } from "../controllers/candidate.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(
  upload.single("cv"),
  createCandidate
);
router.route("/verify").get(authMiddleware, verifyCandidate);
router.route("/apply/:jobId").post(authMiddleware, applyJob);

export default router;
