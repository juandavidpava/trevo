import { check } from 'express-validator';
import { validationSchema } from '../helpers/schemaValidationHandler';

const validateCreate = [
    check('name')
        .trim()
        .exists()
        .not()
        .isEmpty()
        .withMessage('must contain a name')
        .isString()
        .toLowerCase()
        .isLength({max:40}),
    check('email')
        .trim()
        .exists()
        .not()
        .isEmpty()
        .isEmail()
        .toLowerCase()
        .normalizeEmail()
        .isLength({max:90}),
    check('password')
        .trim()
        .exists()
        .notEmpty()
        .isString()
        .isLength({max:255}),
    check('role')
        .trim()
        .default('user')
        .isString()
        .toLowerCase()
        .isLength({max:10}),
    check('token')
        .optional()
        .trim()
        .isString()
        .isLength({max:255}),
    check('active')
        .trim()
        .exists()
        .not()
        .isEmpty()
        .isBoolean(),
    (req, res, next) => {
        validationSchema(req, res, next)
    }
]

const validateUpdate = [
    check('name')
        .optional()
        .trim()
        .isString()
        .isLength({max:40}),
    check('email')
        .optional()
        .trim()
        .isEmail()
        .normalizeEmail()
        .isLength({max:90}),
    check('password')
        .optional()
        .trim()
        .isString()
        .isLength({max:255}),
    check('role')
        .optional()
        .trim()
        .isString()
        .isLength({max:10}),
    check('token')
        .optional()
        .isString()
        .isLength({max:255}),
    check('active')
        .optional()
        .trim()
        .isBoolean(),
    (req, res, next) => {
        validationSchema(req, res, next)
    }
]
export { validateCreate, validateUpdate }
