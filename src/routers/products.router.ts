import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/products', productsController.registerProduct);

productsRouter.get('/products', productsController.getAllProducts);

export default productsRouter;
