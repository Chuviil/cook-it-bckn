import User from "../models/User";

export const getUser = async (req, res) => {
    const user = await User.findById(req.userId, {_id:0, nombre: 1, email: 1, fotoPerfilURL: 1});
    res.status(201).json(user);
}

export const getSavedRecipes = async (req, res) => {
    const user = await User.findById(req.userId).populate('recetasGuardadas');
    res.status(201).json(user.recetasGuardadas);
}