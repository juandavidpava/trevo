import { service } from "../../services/user";

const { httpError } = require('../helpers/handleError');

const getUsers = async (req, res) => {
    try {
        const response = await service.getUsers()
        res.json(response)
    } catch (error) {;
        httpError(res, error)
    }
};

const addUser = async (req, res) => {
    try {
        const response = await service.addUser()
        res.json(response)
    } catch (error) {;
        httpError(res, error)
    }
};

const findUser = async (req, res) => {
    try {
        const response = await service.findUser()
        res.json(response)
    } catch (error) {;
        httpError(res, error)
    }
};

const deleteUser = async (req, res) => {
    try {
        const response = await service.deleteUser()
        res.json(response)
    } catch (error) {;
        httpError(res, error)
    }
};

const updateUser = async (req, res) => {
    try {
        const response = await service.updateUser()
        res.json(response)
    } catch (error) {;
        httpError(res, error)
    }
};

export const controller = {
    getUsers,
    addUser,
    findUser,
    deleteUser,
    updateUser
}