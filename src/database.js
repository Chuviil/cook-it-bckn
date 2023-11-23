import 'dotenv/config';
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_CONNECTION)
    .then(()=> console.log("Connected to MongoDB"))
    .catch((e) => console.log(e));