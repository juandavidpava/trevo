import { repository } from "../database/repositories/user";

const getUsers = async () => {
    const response = await repository.getUsers()
    return response;
};

const addUser = async () => {
    const response = await repository.addUser()
    return response;
};

const findUser = async () => {
    const response = await repository.findUser()
    return response;
};

const deleteUser = async () => {
    const response = await repository.deleteUser()
    return response;
};

const updateUser = async () => {
    const response = await repository.updateUser()
    return response;
};

export const service = {
    getUsers,
    addUser,
    findUser,
    deleteUser,
    updateUser
}