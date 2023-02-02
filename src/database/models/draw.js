import { DataTypes } from 'sequelize';
import db from '../../config/database.js';

const Draw = db.define('draws', {
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    digits:{
        type: DataTypes.NUMBER
    },
    opportunities:{
        type: DataTypes.NUMBER
    }    
});

export { Draw }