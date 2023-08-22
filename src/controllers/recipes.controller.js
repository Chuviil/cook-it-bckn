import Recipe from "../models/Recipe";

export const createRecipe = async (req, res) => {
    const {imagenURL, nombre, cantidadPorciones, tiempo, descripcion, ingredientes, pasos} = req.body;
    const newRecipe = new Recipe(
        {imagenURL, nombre, cantidadPorciones, tiempo, descripcion, ingredientes, pasos}
    );
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
}

export const getRecipes = async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
}

export const getRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.recipeId);
    res.json(recipe);
}

export const updateRecipeById = async (req, res) => {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.recipeId, req.body, {new: true});
    res.json(updatedRecipe);
}

export const deleteRecipeById = async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.recipeId);
    res.status(204).json();
}