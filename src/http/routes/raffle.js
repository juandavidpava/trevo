import { Router } from "express";
import { middleware } from "../middlewares/jwt";
import { controller } from "../controllers/raffle";
import { validateCreate } from '../validators/raffle'

const router = Router();

router.get("/", /* middleware.checkAuthorization, */controller.getRaffles);
router.post("/add", /* middleware.checkAuthorization,*/validateCreate, controller.addRaffle);
router.get("/get/:id", /* middleware.checkAuthorization,*/ controller.findRaffle);
router.delete("/delete/:id",/* middleware.checkAuthorization,*/ controller.deleteRaffle);


module.exports = router