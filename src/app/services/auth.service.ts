import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageservice: StorageService) {}

  inValidUser(user: Users): boolean {
    let users: Users[] = this.storageservice.getAllUsers();
    //console.log(users);

    let iuser: boolean = false;
    for (let i of users) {
      if (i.email === user.email && i.password === user.password) {
        this.storageservice.setLoggedUser(user);
        iuser = true;
        break;
      }
    }
    return iuser;
  }
  logout(): void {
    this.storageservice.removedLoggedUser();
  }
  isLoggedIn(): boolean {
    return this.storageservice.isLoggedIn();
  }
  getloggedInUser(): Users {
    return JSON.parse(localStorage.getItem('users') as string);
  }
}
