import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Product } from '../models/product';
import { ProductService } from './product.service';
import { Cart } from '../models/cart';
import { count } from 'rxjs';
import { Users } from '../models/users';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private productService: ProductService
  ) {}

  addToCart(id: number) {
    let products: Product[] = this.productService.getProduct();
    let product: Product | undefined = products.find((p) => p.id === id);

    if (product) {
      let loggedUser: Users = this.authService.getloggedInUser();
      let cart: Cart[] = this.storageService.getCart();

      let userCart: Cart | undefined = cart.find(
        (c) => c.User.id === loggedUser.id
      )!;
      if (userCart) {
        let existingCartItem: Product | undefined = userCart.cart.find(
          (p) => p.id === id
        );
        // console.log(existingCartItem);
        if (existingCartItem) {
          existingCartItem.count! += 1;
        } else {
          userCart.cart.push({ ...product, count: 1 });
        }
      } else {
        cart.push({ User: loggedUser, cart: [{ ...product, count: 1 }] });
      }
      this.storageService.setCart(cart);
    }
  }

  getcount(): number {
    let count: number = 0;
    const cart = this.storageService.getCart();
    console.log(cart);
    let loggedUser: Users = this.authService.getloggedInUser();

    let userCart: Cart | undefined = cart.find(
      (c) => c.User.id === loggedUser.id
    )!;

    console.log(userCart);
    if (userCart) {
      for (let product of userCart.cart) {
        if (product.count) {
          count += product.count!;
        }
      }
    }

    console.log(count);

    return count;
  }

  getCart(): Product[] {
    let loggedUser: Users = this.authService.getloggedInUser();
    let cart: Cart[] = this.storageService.getCart();
    let userCart: Cart | undefined = cart.find(
      (cartItem) => cartItem.User.id === loggedUser.id
    );
    if (!userCart) {
      return [];
    }
    return userCart.cart;
  }

  clearCart() {}
}
