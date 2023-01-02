
import express from "express";
import morgan from "morgan";
import config from "./config";
import db  from "./database"

const app = express();

// Settings
app.set("port", config.port);

const dbConnection = async () => {
    try {
        await db.authenticate()
        console.log('Connect to DB ',config.portdb)
    } catch (error) {
        throw new Error('DB error connect', error);
    }
}

dbConnection()
// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Route
app.use('/api/v1',require('../http/routes/index'))

export default app;