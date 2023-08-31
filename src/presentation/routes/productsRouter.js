import { Router } from 'express';

import auth from '../middlewares/auth.js';
import { list, getOne, save, updateOne, deleteOne } from '../controllers/productsController.js';
import authorization from '../middlewares/authorization.js';

const productsRouter = Router();

productsRouter.get('/', list);
productsRouter.get('/:pid', getOne);
productsRouter.post('/', authorization('saveProduct'), save);
productsRouter.put('/:pid', authorization('updateProduct'), updateOne);
productsRouter.delete('/:id', authorization('deleteUser'), deleteOne);


export default productsRouter;
