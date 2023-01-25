import { validationResult } from 'express-validator'; 
import { httpBadRequestError } from './responseHandler';

const validationSchema = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        httpBadRequestError(res, error)
    }
}

export { validationSchema }
