import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  users: Users[] = [{ id: 1, email: 'bhargav@gmail.com', password: '123456' }];
  carts: Cart[] = [];

  products: Product[] = [];

  loadusers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  getAllUsers(): Users[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }
  setLoggedUser(user: Users): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  removedLoggedUser(): void {
    localStorage.removeItem('loggedInUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }
  loadproducts(products: Product[]) {
    localStorage.setItem('products', JSON.stringify(products));
  }
  setCart(cart: Cart[]): void {
    localStorage.setItem('carts', JSON.stringify(cart));
  }
  getcartProduct(): Product[] {
    return JSON.parse(localStorage.getItem('products') as string);
  }
  loadCartProduct(cart: Cart[]) {
    if (!localStorage.getItem('carts')) {
      localStorage.setItem('carts', JSON.stringify(cart));
    }
  }
  getCart(): Cart[] {
    let cart = JSON.parse(localStorage.getItem('carts') as string);
    if (!cart) cart = [];
    return cart;
  }
  clearCart() {
    let order: Product[] = JSON.parse(localStorage.getItem('carts') as string);

    localStorage.setItem('order', JSON.stringify(order) as string);

    console.log(order);
    return localStorage.setItem('carts', JSON.stringify([]) as string);
  }
  getorder() {
    return JSON.parse(localStorage.getItem('order') as string);
  }
  getCartProducts(): Product[] {
    return JSON.parse(localStorage.getItem('carts') as string);
  }
}
