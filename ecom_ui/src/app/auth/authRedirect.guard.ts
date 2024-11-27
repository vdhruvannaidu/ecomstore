import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      // Redirect to the home route if authenticated
      this.router.navigate(['/home']);
      return false;
    } else {
      // Allow navigation to the login route if not authenticated
      return true;
    }
  }
}
