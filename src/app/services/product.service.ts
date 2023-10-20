import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpclientmodule: HttpClient) {}

  getAllProducts() {
    return this.httpclientmodule.get<Product[]>(
      'https://fakestoreapi.com/products'
    );
  }

  getProduct(): Product[] {
    return JSON.parse(localStorage.getItem('products') as string);
  }
}
