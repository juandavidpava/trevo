import { matchedData } from "express-validator";
import { httpInternalServerError, httpSuccess, httpNotFoundError, httpBadRequestError } from "../helpers/responseHandler";
import { encryptPassword } from "../helpers/passwordHandler";
import { service } from "../../services/user";
import { tokenSing } from "../helpers/JWTHandler";

const getUsers = async (req, res) => {
    try {
        const originalUsers = await service.getUsers()

        // no mandamos pass por seguridad
        const users = originalUsers.map(user => {
            delete user.dataValues.password
            return user
        })

        httpSuccess(res, {users})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const addUser = async (req, res) => {
    try {
        req = matchedData(req)
        const foundUser = await service.searchUserEmail(req.email)
       
        if(foundUser) throw new httpBadRequestError(res,"email used");

        const password = await encryptPassword(req.password)
        const token = await tokenSing(req)
        const body = {...req, password, token}
        const user = await service.addUser(body)
        delete user.dataValues.password
        
        httpSuccess(res, {user})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const findUser = async (req, res) => {
    try {
        const { id } = req?.params

        if(!id) throw new httpBadRequestError(res);

        const user = await service.findUser(id)

        if(!user) throw new httpNotFoundError(res);
        delete user.dataValues.password

        httpSuccess(res, {user})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req?.params

        if(!id) throw new httpBadRequestError(res);

        const user = await service.findUser(id)

        if(!user) throw new httpNotFoundError(res);

        service.deleteUser(user)
        httpSuccess(res)
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req?.params

        if(!id) throw new httpBadRequestError(res);
      
        const user = await service.findUser(id)
        const body = matchedData(req)

        const userUpdate = await service.updateUser(user, body)
        delete userUpdate.password
        httpSuccess(res, {userUpdate})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

export const controller = {
    getUsers,
    addUser,
    findUser,
    deleteUser,
    updateUser
}
