import { Request, Response } from 'express';
import productsService from '../services/products.service';

const registerProduct = async (req: Request, res: Response): Promise<Response> => {
  const product = req.body;
  const productRegistered = await productsService.registerProduct(product);
  return res.status(201).json(productRegistered);
};

const getAllProducts = async (__req: Request, res: Response) => {
  const allProducts = await productsService.getAllProducts();
  console.log(allProducts);
  
  return res.status(200).json(allProducts);
};

export default {
  registerProduct,
  getAllProducts,
};