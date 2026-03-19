import { Router } from "express";

const router = Router();

import { register } from "../controllers/auth.comtroller.js";
import { login } from "../controllers/auth.comtroller.js";

router.post("/login", login);
router.post("/register", register);

export default router;
