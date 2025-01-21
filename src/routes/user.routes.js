import { Router } from "express";
import { getAllUsersController } from "../controllers/user.controller.js";

const router = Router();

router.get("/api/v1/users", getAllUsersController);

export default router;
