import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  submit(loginForm: NgForm) {
    if (this.authService.inValidUser(loginForm.value)) {
      // console.log(loginForm.value);
      this.router.navigate(['home'], { replaceUrl: true });
    } else {
      this.error = 'please enter valid Details';
    }
  }
}
