import { DataTypes } from 'sequelize';
import db from "../../config/database";

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