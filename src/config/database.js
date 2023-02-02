import { Sequelize } from 'sequelize';
import config from './config.js';

const db = new Sequelize(config.database, config.user, config.password,{
    host: config.host,
    dialect: 'mysql',
    // Para mostarr los log de las consultas a BD
    // logging: false
})

export default db;