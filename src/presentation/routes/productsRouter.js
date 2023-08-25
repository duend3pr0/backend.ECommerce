import { Router } from "express"

import { list, getOne, save, updateOne } from '../controllers/productsController.js';

const productsRouter = Router();

productsRouter.get('/', list);
productsRouter.get('/:pid', getOne);
productsRouter.post('/', save);
productsRouter.put('/:pid', updateOne);

export default productsRouter;
