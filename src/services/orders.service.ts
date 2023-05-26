import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { GetAllOrdersReturns } from '../types/Order';

const getAllOrders = async (): Promise<GetAllOrdersReturns[]> => {
  const allOrders = await OrderModel.findAll({
    include: {
      model: ProductModel, as: 'productIds', attributes: ['id'],
    },
  });
  console.log(allOrders);
  
  const formattedOrders = allOrders.map((order) => {
    const productIds = order.dataValues.productIds?.map((product) => product.id);
    return {
      id: order.dataValues.id,
      userId: order.dataValues.userId,
      productIds,
    };
  });
  return formattedOrders;
};

export default {
  getAllOrders,
};