import config from "./config";
import { Sequelize } from "sequelize";

const db = new Sequelize(config.database, config.user, config.password,{
    host: config.host,
    dialect: 'mysql',
    // Para mostarr los log de las consultas a BD
    // logging: false
})

export default db;