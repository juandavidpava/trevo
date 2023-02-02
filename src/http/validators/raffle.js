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
    check('title')
        .trim()
        .exists()
        .not()
        .isEmpty()
        .isLength({max:50}),
    check('text1')
        .trim()
        .exists()
        .not()
        .isEmpty()
        .isLength({max:500}),
    check('text2')
        .trim()
        .exists()
        .not()
        .isEmpty()
        .isLength({max:500}), 
    check('text3')
        .trim()
        .exists()
        .not()
        .isEmpty()
        .isLength({max:500}),
    check('date')
        .trim()
        .optional(),
    check('idDraw')
        .trim()
        .isNumeric()
        .isInt(),                    
    (req, res, next) => {
        validationSchema(req, res, next)
    }
]

export { validateCreate }
