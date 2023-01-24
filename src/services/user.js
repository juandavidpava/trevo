import { repository } from "../database/repositories/user";

const getUsers = async () => {
    const users = await repository.getUsers()
    return users;
};

const addUser = async user => {
    const userCreated = await repository.addUser(user)
    return userCreated;
};

const findUser = async id => {
    const user = await repository.findUser(id)
    return user;
};

const deleteUser = async user => {
    await repository.deleteUser(user)
};

const updateUser = async (user,body) => {
    const userUpdate = await repository.updateUser(user,body)
    return userUpdate;
};

const searchUserEmail = async email => {
    const user = await repository.searchUserEmail(email)
    return user;
};

export const service = {
    getUsers,
    addUser,
    findUser,
    deleteUser,
    updateUser,
    searchUserEmail
}
