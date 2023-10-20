import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private storageService: StorageService,
    private cartService: CartService
  ) {}
  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        console.log(data);
        this.products = data;
        this.storageService.loadproducts(this.products);
      },

      complete: () => {
        console.log('done');
      },
      error: (error: Error) => {
        console.log('message', error.message);
        console.log('Name', error.name);
      },
    });
  }
  addToCart(id: number) {
    this.cartService.addToCart(id);
  }
}
