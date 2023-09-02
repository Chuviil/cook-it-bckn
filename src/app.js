import express from 'express';
import morgan from "morgan";
import pkg from '../package.json';
import {authRoutes, recipesRoutes, userRoutes} from './routes';

const app = express();

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

export default app;