import {Router} from "express";
import {verifyToken} from "../middlewares";
import * as userController from "../controllers/user.controller";

const router = Router();

router.get("/", verifyToken, userController.getUser)

export default router;