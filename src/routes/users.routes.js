import { Router } from "express";
import { methods as userController } from "../controllers/users.controllers.js";

const router = Router();

router.get("/", userController.getUsers )
router.post("/", userController.addUser)

export default router;