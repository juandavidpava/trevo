import { DataTypes } from 'sequelize';
import db from '../../config/database.js';

const Raffle = db.define('raffles', {
    name:{
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING
    },
    text1: {
        type: DataTypes.STRING
    },
    text2: {
        type: DataTypes.STRING
    },
    text3: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE
    },
    idDraw: {
        type: DataTypes.BIGINT
    }

});

export { Raffle }