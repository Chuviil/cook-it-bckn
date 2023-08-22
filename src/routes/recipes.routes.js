import {Router} from "express";
import * as recipeController from "../controllers/recipes.controller";
import {verifyToken} from "../middlewares";

const router = Router();

router.get("/", recipeController.getRecipes);

router.post("/", verifyToken, recipeController.createRecipe);

router.get("/:recipeId", recipeController.getRecipeById);

router.put("/:recipeId", verifyToken, recipeController.updateRecipeById);

router.delete("/:recipeId", verifyToken, recipeController.deleteRecipeById);

export default router;