import { Router } from "express";
import { middleware } from "../middlewares/jwt";
import { controller } from "../controllers/serie";
/* import { validateCreate } from '../validators/raffle' */

const router = Router();

router.get("/raffle/:id", /* middleware.checkAuthorization,*/ controller.getSeriesByRaffle);


module.exports = router