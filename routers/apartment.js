import express from "express";

import { checkEmail, checkToken, upload } from "../middlewares.js";
import {
      create, getAll, getApartmentByCategory,
      getApartmentByCity, getByAdvertiser, getById,
      getByNumBeds, getByPrice, remove, remove1, update, update1
} from "../controllers/apartment.js";

const router = express.Router();

router.get('', getAll)
router.get('/getById/:id', getById)
router.get('/getByCategory/:id', getApartmentByCategory)
router.get('/getByCity/:id', getApartmentByCity)
router.get('/getByNumBeds/:bed/:num', getByNumBeds)
router.get('/getByPrice/:price/:num', getByPrice)
router.get('/getByAdvertiser/:id', checkToken, getByAdvertiser)
router.post('', checkToken, upload.single('image'), create)
router.patch('', checkToken, upload.single('image'), update1, update)
router.delete('/:id/:idAdver',checkToken, remove1, remove)

export default router