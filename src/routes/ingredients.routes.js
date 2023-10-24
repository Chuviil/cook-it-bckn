import {Router} from "express";
import * as IngredientController from "../controllers/ingredients.controller";
const router = Router();

router.get("/", IngredientController.getIngredients);
router.get("/:ingredientId", IngredientController.getIngredientById);
router.post("/", IngredientController.createIngredient);

export default router;