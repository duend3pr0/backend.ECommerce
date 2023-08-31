import { Router } from 'express';
import auth from '../middlewares/auth.js';
import { list, deleteOne, getOne, save, update } from '../controllers/userController.js';
import authorization from '../middlewares/authorization.js';

const cartRouter = Router();

cartRouter.use(auth);

cartRouter.get('/', authorization('getcarts'), list);
cartRouter.get('/:id', authorization('getcart'), getOne);
cartRouter.post('/', authorization('savecart'), save);
cartRouter.put('/:id', authorization('updatecart'), update);
cartRouter.delete('/:id', authorization('deletecart'), deleteOne);

export default cartRouter;