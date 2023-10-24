import Ingredient from "../models/Ingredient";

export const createIngredient = async (req, res) => {
    const {nombre} = req.body;
    const newIngredient = new Ingredient({nombre});
    const savedIngredient = await newIngredient.save();
    res.status(201).json(savedIngredient);
}

export const getIngredients = async (req, res) => {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
}

export const getIngredientById = async (req, res) => {
    const ingredient = await Ingredient.findById(req.params.ingredientId);
    res.json(ingredient);
}

export const updateIngredientById = async (req, res) => {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.ingredientId, req.body, {new: true});
    res.json(updatedIngredient);
}

export const deleteIngredientById = async (req, res) => {
    await Ingredient.findByIdAndDelete(req.params.recipeId);
    res.status(204).json();
}