import { Router } from "express";
import { controller } from "../controllers/login";

const router = Router();

router.post("/", controller.login);

module.exports = router
