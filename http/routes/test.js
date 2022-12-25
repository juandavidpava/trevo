import { Router } from "express";
import { getTests } from "../controllers/test";

const router = Router();

router.get("/", getTests);

module.exports = router
