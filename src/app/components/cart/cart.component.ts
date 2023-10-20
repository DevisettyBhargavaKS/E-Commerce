import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  carts: Product[] = [];
  constructor(
    private cartService: CartService,
    private storageService: StorageService
  ) {
    this.carts = cartService.getCart();
  }
  cartProducts = this.storageService.getcartProduct();

  clearCart() {
    this.storageService.clearCart();
    this.carts = [];
  }
}
