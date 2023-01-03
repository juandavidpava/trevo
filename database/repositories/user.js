import { QueryTypes } from "sequelize";
import db from '../../config/database';
import { User } from "../models/user";

const getUsers = async () => {
    const users = User.findAll();
    return users;
};

const addUser = async user => {
    const userCreated = new User(user);
    userCreated.save()
    return userCreated;
};

const findUser = async id => {
    const user = User.findOne({id})
    return user;
};

const deleteUser = async user => {
    await user.destroy()
};

const updateUser = async (user,body) => {
    const userUpdate = await user.update(body)
    return userUpdate.dataValues;
};

const searchUserEmail = async email => {
    const user =  await db.query(`SELECT * FROM users WHERE email= '${email}'`, { type: QueryTypes.SELECT });
    return user[0];
};

export const repository = {
    getUsers,
    addUser,
    findUser,
    deleteUser,
    updateUser,
    searchUserEmail
}