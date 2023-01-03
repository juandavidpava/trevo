import { check } from 'express-validator';
import { validationSchema } from '../helpers/schemaValidationHandler';

const validateLogin = [
    check('email')
        .trim()
        .exists()
        .notEmpty()
        .isEmail()
        .normalizeEmail()
        .toLowerCase()
        .isLength({max:90}),
    check('password')
        .trim()
        .exists()
        .notEmpty()
        .isString()
        .isLength({max:255}),
    (req, res, next) => {
        validationSchema(req, res, next)
    }
]

export { validateLogin }
