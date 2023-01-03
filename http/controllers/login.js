import { matchedData } from "express-validator";
import { httpInternalServerError, httpBadRequestError, httpUnauthorizedError, httpSuccess } from "../helpers/responseHandler";
import { comparePassword } from "../helpers/passwordHandler";
import { service } from "../../services/user";
import { tokenSing } from "../helpers/JWTHandler";

const login = async (req, res) => {
    try {
        req = matchedData(req)

        const user = await service.searchUserEmail(req.email)
        if(!user) throw new httpUnauthorizedError(res, 'Incorrect username or password');

        const check = await comparePassword(req.password, user.password)
        if(!check) throw new httpUnauthorizedError(res, 'Incorrect username or password');


        const userClass = await service.findUser(user.id)
        const token = tokenSing(user)
        const userUpdate = await service.updateUser(userClass, {token})
        delete userUpdate.password
        httpSuccess(res, {user:userUpdate})
    } catch (error) {;
        httpInternalServerError(res, error)
    }
};

export const controller = { login }