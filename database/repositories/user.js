import { getConnection } from "../../config/database";

const getUsers = async () => {
    const connection = await getConnection()
    const reponse = await  connection.query("SELECT * FROM user")
    return reponse;
};

const addUser = async () => {
    const connection = await getConnection()
    const reponse = await  connection.query("SELECT * FROM user")
    return reponse;
};

const findUser = async () => {
    const connection = await getConnection()
    const reponse = await  connection.query("SELECT * FROM user")
    return reponse;
};

const deleteUser = async () => {
    const connection = await getConnection()
    const reponse = await  connection.query("SELECT * FROM user")
    return reponse;
};

const updateUser = async () => {
    const connection = await getConnection()
    const reponse = await  connection.query("SELECT * FROM user")
    return reponse;
};

export const repository = {
    getUsers,
    addUser,
    findUser,
    deleteUser,
    updateUser
}