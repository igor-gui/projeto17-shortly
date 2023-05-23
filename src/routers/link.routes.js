import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import linkSchema from "../schemas/linkSchema.js";
import checkLogin from "../middlewares/link/checkLogin.js";
import { createLink, deleteUrl, getUrls } from "../controllers/link.controllers.js";
import searchFor from "../middlewares/link/searchFor.js";
import checkingIfItsYours from "../middlewares/link/checkingIfItsYours.js";

const router = Router();

router.post('/urls/shorten', validateSchema(linkSchema), checkLogin, createLink);
router.get('/urls/:id',searchFor ,getUrls);
router.delete('/urls/:id', checkLogin, searchFor, checkingIfItsYours, deleteUrl);
export default router;