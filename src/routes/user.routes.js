import {Router} from "express";
import {verifyToken} from "../middlewares";
import * as userController from "../controllers/user.controller";

const router = Router();

router.get("/", verifyToken, userController.getUser)
router.get("/savedRecipes", verifyToken, userController.getSavedRecipes)

export default router;