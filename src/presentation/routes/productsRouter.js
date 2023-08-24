import { Router } from "express"

import { getAll } from '../controllers/productsController.js'


const productsRouter = Router();


productsRouter.get('/products', getAll)

export default productsRouter;
