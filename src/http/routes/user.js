import { Router } from 'express';
import { middleware } from '../middlewares/jwt.js';
import { controller } from '../controllers/user.js';
import { validateCreate, validateUpdate } from '../validators/user.js';

const router = Router();

router.get('/', /*middleware.checkAuthorization,*/ controller.getUsers);
router.post('/add', /*middleware.checkAuthorization,*/ validateCreate, controller.addUser);
router.get('/get/:id', /*middleware.checkAuthorization,*/ controller.findUser);
router.delete('/delete/:id', /*middleware.checkAuthorization,*/ controller.deleteUser);

export { router as user }
