import { Router } from 'express';
import { middleware } from '../middlewares/jwt.js';
import { controller } from '../controllers/serie.js';
/* import { validateCreate } from '../validators/raffle.js' */

const router = Router();

router.get('/raffle/:id', /* middleware.checkAuthorization,*/ controller.getSeriesByRaffle);


export { router as serie }