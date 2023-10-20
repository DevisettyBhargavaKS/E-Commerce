import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Users } from './models/users';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.storageService.loadusers();
  }
  isLoggedIn(): boolean {
    return this.authservice.isLoggedIn();
  }
}
