import {model, Schema} from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    nombre: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fotoPerfilURL: {
        type: String,
        default: 'https://ladygeeky.com/wp-content/uploads/2022/11/gazelle.jpeg'
    }
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

export default model('User', userSchema);