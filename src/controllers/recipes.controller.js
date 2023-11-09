import Recipe from "../models/Recipe";
import blobServiceClient from "../azureConfig";

export const createRecipe = async (req, res) => {
    const {nombre, cantidadPorciones, tiempo, descripcion, ingredientes, pasos, imageData} = req.body;

    const imagenURL = await createImageUrl(imageData, req.userId);

    const newRecipe = new Recipe(
        {nombre, cantidadPorciones, tiempo, descripcion, ingredientes, pasos, imagenURL}
    );

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
}

export const getRecipes = async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
}

export const getRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.recipeId).populate('ingredientes.ingrediente');
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

export const createImageUrl = async (imageData, userId) => {
    const containerClient = blobServiceClient.getContainerClient("recetasimagenes");
    const blockBlobContainer = containerClient.getBlockBlobClient(`${userId}_${Date.now()}.jpg`);

    const buffer = Buffer.from(imageData, 'base64');

    await blockBlobContainer.upload(buffer, buffer.length);

    return blockBlobContainer.url;
}
