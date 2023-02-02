import { check } from 'express-validator';
import { validationSchema } from '../helpers/schemaValidationHandler.js';

const validateCreate = [
    check('name')
        .trim()
        .exists()
        .not()
        .isEmpty()
        .withMessage('must contain a name')
        .isString()       
        .isLength({max:50}),
    check('description')
        .trim()
        .exists()
        .not()
        .isEmpty()
        .isLength({max:500}),
    check('digits')
        .trim()
        .exists()
        .notEmpty()
        .isNumeric(),      
    check('opportunities')
        .trim()
        .exists()
        .notEmpty()
        .isNumeric(),   
    (req, res, next) => {
        validationSchema(req, res, next)
    }
]

export { validateCreate }
