import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class AsignupService {
  constructor(private storageService: StorageService) {}
  newUser(signupForm: Users) {
    if (signupForm) {
      let signup = {
        id: this.storageService.users.length + 1,
        email: signupForm.email,
        password: signupForm.password,
      };
      let users: Users[] = this.storageService.getAllUsers();
      users.push(signup);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}
