import { Router } from "express"
import userSchema from "../schemas/user.schema.js";
import validateSchema from "../middlewares/validateSchema.js";
import { checkUser, cryPass } from "../middlewares/authMiddlewares.js";
import { postUser } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/signup", validateSchema(userSchema), checkUser, cryPass, postUser)

export default router;

