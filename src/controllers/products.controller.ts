import { Request, Response } from 'express';
import productsService from '../services/products.service';

const registerProduct = async (req: Request, res: Response): Promise<Response> => {
  const product = req.body;
  const productRegistered = await productsService.registerProduct(product);
  return res.status(201).json(productRegistered);
};

export default {
  registerProduct,
};