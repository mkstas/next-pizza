import { Product } from '@prisma/client';
import { instance } from './instance';
import { ApiRoutes } from './constants';

export const search = async (query: string) => {
  return (await instance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } })).data;
};
