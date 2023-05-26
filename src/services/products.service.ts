import ProductModel, { 
  ProductInputtableTypes, 
  ProductSequelizeModel,
} from '../database/models/product.model';
import { Product } from '../types/Product';

const registerProduct = async (product: Product): Promise<ProductInputtableTypes> => {
  const createdProduct = await ProductModel.create({
    name: product.name,
    price: product.price,
    orderId: product.orderId,
  });
  const productData: ProductInputtableTypes = {
    id: createdProduct.dataValues.id,
    name: createdProduct.dataValues.name,
    price: createdProduct.dataValues.price,
  };

  return productData;
};

const getAllProducts = (): Promise<ProductSequelizeModel[]> => ProductModel.findAll();

export default {
  registerProduct,
  getAllProducts,
};