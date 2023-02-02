import { httpInternalServerError, httpUnauthorizedError, httpSuccess } from '../helpers/responseHandler.js';
import { comparePassword } from '../helpers/passwordHandler.js';
import { service } from '../../services/user.js';
import { tokenSing } from '../helpers/JWTHandler.js';

const login = async (req, res) => {
    try {
        const user = await service.searchUserEmail(req.body.email)               
        if(!user) throw new httpUnauthorizedError(res, 'Incorrect username or password');

        const check = await comparePassword(req.body.password, user.password)
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