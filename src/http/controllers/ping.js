import { QueryTypes } from 'sequelize';
import db from '../../config/database.js';

const ping = async (req, res) => {
    const response =  await db.query(`SELECT 1+1`, { type: QueryTypes.SELECT });
    res.status(200)
    res.json({ response, status:200 })
}

export const controller = { ping }
