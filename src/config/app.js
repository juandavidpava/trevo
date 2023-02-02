
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import config from './config.js';
import db  from './database.js';
import { routes } from '../http/routes/index.js';

const app = express();

// Settings
app.set('port', config.port);

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
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

// Route
app.use('/api/v1', routes);

export default app;