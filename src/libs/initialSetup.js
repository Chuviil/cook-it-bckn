import Ingredient from "../models/Ingredient";
import ingredients_list from '../../assets/lista_Ingredientes.json'


export const createIngredients = async () => {
    const count = await Ingredient.estimatedDocumentCount();

    if (count > 0) return;

    try {
        console.log("No Ingredients in DB inserting template...");

        await Ingredient.insertMany(ingredients_list);

        console.log("Ingredients template inserted in DB!");
    } catch (e) {
        console.log(e);
    }

}