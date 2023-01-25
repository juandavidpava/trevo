import { Router } from "express";
import { middleware } from "../middlewares/jwt";
import { controller } from "../controllers/draw";
import { validateCreate } from '../validators/draw'

const router = Router();

router.get("/", middleware.checkAuthorization, controller.getDraws);
router.post("/add", middleware.checkAuthorization,validateCreate, controller.addDraw);
router.get("/get/:id", middleware.checkAuthorization, controller.findDraw);
router.delete("/delete/:id", middleware.checkAuthorization, controller.deleteDraw);

module.exports = router