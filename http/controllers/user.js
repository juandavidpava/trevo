import { service } from "../../services/user";
import { httpInternalServerError, httpSuccess, httpNotFoundError, httpBadRequestError } from "../helpers/responseHandler";

const getUsers = async (req, res) => {
    try {
        const users = await service.getUsers()
        httpSuccess(res, {users})
    } catch (error) {
        httpInternalServerError(res, error)
    }
};

const addUser = async (req, res) => {
    try {       
        const foundUser = await service.searchUserEmail(req.body.email)
        if(foundUser.length > 0) throw new httpBadRequestError(res,"email used");

        const user = await service.addUser(req.body)
        
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

        const userUpdate = await service.updateUser(user,req.body)
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
