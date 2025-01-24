import { Router } from "express";
import { userLogin,userLogout } from "../controllers/login_logout.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js"

const router = Router();

router.route("/login").post(userLogin);
router.route("/logout").get(authMiddleware,userLogout);

export default router;
