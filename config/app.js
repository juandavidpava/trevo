
import express from "express";
import morgan from "morgan";
import config from "./config";

const app = express();

// Settings
app.set("port", config.port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Route
app.use('/api/v1',require('../http/routes/index'))

export default app;