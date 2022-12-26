import config from "./config";

const mysql = require('mysql')
const connection = require('express-myconnection')

connection(mysql,{
    host: config.host,
    database: config.database,
    user: 'root',
    password: '',
    port: 3306
},'single')

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};





/* import mysql from "promise-mysql";
import config from "./config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
}; */