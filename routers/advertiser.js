import express from "express";
import { login, signin } from "../controllers/advertiser.js";
import { checkEmail } from "../middlewares.js";


const router = express.Router();

router.post('/getByEmail&Password', checkEmail, login)
router.post('', checkEmail, signin)

export default router