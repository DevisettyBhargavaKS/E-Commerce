import { Users } from './users';
import { Product } from './product';
export interface Cart {
  User: Users;
  cart: Product[];
}
