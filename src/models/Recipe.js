import {Schema, model} from "mongoose";

const recipeScheme = new Schema({
    imagenURL: {
        type: String,
        default: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-fJ5oJx3_ChQEuxCSFpBRpHsMg4Yks2bfhhm6caNGCMgCXkVb",
    },
    nombre: String,
    cantidadPorciones: Number,
    tiempo: Number,
    descripcion: String,
    ingredientes: [{
        ingrediente: {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        },
        cantidad: Number,
        unidad: String
    }],
    pasos: [String],
    vecesSeguidas: {
        type: Number,
        default: 0
    },
    puntuacion: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Recipe', recipeScheme)
