import ProductModel, { 
  ProductSequelizeModel, 
} from '../database/models/product.model';
import { Product } from '../types/Product';

const registerProduct = async (product: Product):
Promise<ProductSequelizeModel | null> => {
  await ProductModel.create({
    name: product.name,
    price: product.price,
    orderId: product.orderId,
  });
  return ProductModel.findOne({ 
    where: { name: product.name },
    attributes: ['name', 'price', 'id'],
  });
};

export default {
  registerProduct,
};