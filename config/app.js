
import express from "express";
import morgan from "morgan";
const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Route
app.use('/api/v1',require('../http/routes/index'))

export default app;