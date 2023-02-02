import pkg from 'jsonwebtoken';
import config from '../../config/config.js';
import { httpUnauthorizedError } from './responseHandler.js';

const { sign, verify } = pkg;

const tokenSing = user => {
    const singUser = sign({
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email
    }, config.secretKey, {expiresIn:'10h'})

    return singUser;
}

const tokenVerify = (res, tokenJWT) => {
    try {
        return verify(tokenJWT,config.secretKey)
    } catch (error) {
        httpUnauthorizedError(res, `Invalid token, ${error}`)
    }
}

export { tokenSing, tokenVerify }
