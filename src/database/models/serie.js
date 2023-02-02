import { DataTypes } from 'sequelize';
import db from '../../config/database.js';

const Serie = db.define('series', {
    number:{
        type: DataTypes.STRING
    },
    index:{
        type: DataTypes.NUMBER
    },
    idDraw:{
        type: DataTypes.NUMBER
    },
 
});

export { Serie }