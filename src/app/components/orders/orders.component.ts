import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  constructor(private storageService: StorageService) {}

  cartProducts = this.storageService.getorder();
}
