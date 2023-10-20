import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/signin']);
  return false;
};
