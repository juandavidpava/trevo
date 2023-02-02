import { Router } from 'express';
import { middleware } from '../middlewares/jwt.js';
import { controller } from '../controllers/raffle.js';
import { validateCreate } from '../validators/raffle.js';

const router = Router();

router.get('/', /* middleware.checkAuthorization, */controller.getRaffles);
router.post('/add', /* middleware.checkAuthorization,*/validateCreate, controller.addRaffle);
router.get('/get/:id', /* middleware.checkAuthorization,*/ controller.findRaffle);
router.delete('/delete/:id',/* middleware.checkAuthorization,*/ controller.deleteRaffle);


export { router as raffle }