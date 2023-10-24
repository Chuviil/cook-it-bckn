import {Schema, model} from'mongoose';

const ingredientSchema = new Schema({
    imagenURL: {
        type: String,
        default: "https://th.bing.com/th/id/OIP.i6d0702r7nHGEhnN_x7OqAHaHa?pid=ImgDet&rs=1"
    },
    nombre: String,
}, {
    timestamps: true,
    versionKey: false
});

export default model('Ingredient', ingredientSchema);