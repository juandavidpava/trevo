import { Router } from "express";
import { controller } from "../controllers/user";

const router = Router();

router.get("/", controller.getUsers);
router.post("/add", controller.addUser);
router.get("/get/:id", controller.findUser);
router.delete("/delete/:id", controller.deleteUser);
router.put("/update/:id", controller.updateUser);

module.exports = router
