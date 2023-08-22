import {Schema, model} from "mongoose";

const recipeScheme = new Schema({
    imagenURL: String,
    nombre: String,
    cantidadPorciones: Number,
    tiempo: Number,
    descripcion: String,
    ingredientes: [String],
    pasos: [String],
}, {
    timestamps: true,
    versionKey: false
})

export default model('Recipe', recipeScheme)
