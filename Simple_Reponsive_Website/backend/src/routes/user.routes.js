import {Router} from "express";
import { userMessage } from "../controller/user.controller.js";

const router = Router();

router.route("/").post(userMessage);

export default router;