export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type GetAllOrdersReturns = {
  id: number;
  userId: number;
  productIds?: number[];
};
