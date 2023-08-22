import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://Chuvii:TitaniC2@learncluster.kdxcelk.mongodb.net/cookit`)
    .then(()=> console.log("Connected to MongoDB"))
    .catch((e) => console.log(e));