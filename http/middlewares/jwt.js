import { httpUnauthorizedError } from "../helpers/responseHandler";
import { tokenVerify } from '../helpers/JWTHandler';

const checkAuthorization = (req, res, next) => {
   if(!req.headers.authorization) throw new httpUnauthorizedError(res, 'Token not present');

   const token = req.headers.authorization.split(' ').pop();
   tokenVerify(res, token)
   
   next()
}

export const middleware = { checkAuthorization }
