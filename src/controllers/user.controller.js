import User from "../models/User";

export const getUser = async (req, res) => {
    const user = await User.findById(req.userId, {password: 0});
    res.status(201).json(user);
}