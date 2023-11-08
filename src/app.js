import express from 'express';
import morgan from "morgan";
import pkg from '../package.json';
import {authRoutes, recipesRoutes, userRoutes, ingredientRoutes} from './routes';
import cors from "cors";
import {createIngredients} from "./libs/initialSetup";

const app = express();

createIngredients();

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOptions));

app.set('pkg', pkg);

app.use(express.json());

app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
    })
});

app.use("/api/recipes", recipesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/ingredients", ingredientRoutes);

export default app;