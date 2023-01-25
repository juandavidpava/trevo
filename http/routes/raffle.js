import { Router } from "express";
import { middleware } from "../middlewares/jwt";
import { controller } from "../controllers/user";
import { validateCreate, validateUpdate } from '../validators/user'

const router = Router();

router.get("/", middleware.checkAuthorization, controller.getUsers);
router.post("/add", middleware.checkAuthorization,validateCreate, controller.addUser);
router.get("/get/:id", middleware.checkAuthorization, controller.findUser);
router.delete("/delete/:id", middleware.checkAuthorization, controller.deleteUser);
router.put("/update/:id", middleware.checkAuthorization, validateUpdate, controller.updateUser);

module.exports = router