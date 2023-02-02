import { DataTypes } from 'sequelize';
import db from '../../config/database.js';

const User = db.define('users', {
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    role:{
        type: DataTypes.STRING
    },
    active:{
        type: DataTypes.BOOLEAN
    },
    token:{
        type: DataTypes.STRING
    }
});

export { User }
