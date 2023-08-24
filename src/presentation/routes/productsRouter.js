import { Router } from "express"

import { getAll } from '../controllers/productsController.js'


const productsRouter = Router();


productsRouter.get('', getAll)

export default productsRouter;
