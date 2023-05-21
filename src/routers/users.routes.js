import { Router } from "express"
import userSchema from "../schemas/user.schema.js";
import validateSchema from "../middlewares/validateSchema.js";
import { checkUser, cryPass, deCryPass, userExists } from "../middlewares/authMiddlewares.js";
import { createSession, postUser } from "../controllers/auth.controllers.js";
import sessionSchema from "../schemas/sessionSchema.js";

const router = Router();

router.post("/signup", validateSchema(userSchema), checkUser, cryPass, postUser);
router.post("/signin", validateSchema(sessionSchema), userExists, deCryPass, createSession)

export default router;

