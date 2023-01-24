import { Router } from "express";
import { controller } from "../controllers/login";
import { validateLogin } from "../validators/login";

const router = Router();

router.post("/login", validateLogin, controller.login);

module.exports = router
