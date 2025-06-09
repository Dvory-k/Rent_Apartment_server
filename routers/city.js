import express from "express";
import { getAll, create } from "../controllers/city.js"
import { checkToken } from "../middlewares.js";

const router = express.Router();

router.get('', getAll)
router.post('',checkToken,create)

export default router