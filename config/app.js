
import express from "express";
import morgan from "morgan";
import config from "./config";
import db from "./database";

const app = express();
const mysql = require('mysql')
const connection = require('express-myconnection')



// Settings
app.set("port", config.port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
console.info('aaeeii', config)
app.use(connection(mysql,{
    host: config.host,
    database: config.database,
    user: 'user_mysql',
    password: 'user_mysql',
    port: 3306
},'single'))
/* app.use(db); */

// Route
app.use('/api/v1',require('../http/routes/index'))

export default app;