import { Router } from "express";

const router = Router();

import { register } from "../controllers/auth.comtroller.js";
import { login } from "../controllers/auth.comtroller.js";
import { profile } from "../controllers/auth.comtroller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post("/login", login);
router.post("/register", register);

router.get("/profile", authMiddleware, profile);

export default router;
