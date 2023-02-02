import { Router } from 'express';
import { controller } from '../controllers/login.js';

const router = Router();

router.post('/', controller.login);

export { router as login }