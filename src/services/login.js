import { repository } from '../database/repositories/user.js';

const login = async () => {
    const response = await repository.addUser()
    return response;
};

const ping = async () => {
    const response =  await db.query(`SELECT 1+1`, { type: QueryTypes.SELECT });
    return response;
};

export const service = { login }