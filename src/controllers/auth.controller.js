import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config"

export const login = async (req, res) => {
    const foundUser = await User.findOne({email: req.body.email})

    if (!foundUser) return res.status(404).json({message: "Usuario no encontrado"});

    const matchPassword = await User.comparePassword(req.body.password, foundUser.password);

    if (!matchPassword) return res.status(401).json({token: null, message: "Contraseña incorrecta"});

    const token = jwt.sign({id: foundUser._id}, config.SECRET, {
        expiresIn: 2419200 //2 Semanas
    })

    res.json({
        token,
        nombre: foundUser.nombre,
        fotoPerfilURL: foundUser.fotoPerfilURL
    })
}

export const register = async (req, res) => {
    const {nombre, email, password} = req.body;

    const newUser = new User({
        nombre,
        email,
        password: await User.encryptPassword(password),
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 2419200 //2 Semanas
    })

    res.status(201).json({
        token,
        nombre: savedUser.nombre,
        fotoPerfilURL: savedUser.fotoPerfilURL
    })
}
