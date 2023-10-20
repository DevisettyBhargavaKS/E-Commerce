import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AsignupService } from 'src/app/services/asignup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  constructor(private asignup: AsignupService, private router: Router) {}
  submit(signupForm: NgForm) {
    this.asignup.newUser(signupForm.value);
    this.router.navigate(['/signin'], { replaceUrl: true });
  }
}
