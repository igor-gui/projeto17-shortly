import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import linkSchema from "../schemas/linkSchema.js";
import checkLogin from "../middlewares/link/checkLogin.js";
import createLink from "../controllers/link.controllers.js";

const router = Router();

router.post('/urls/shorten', validateSchema(linkSchema), checkLogin, createLink)