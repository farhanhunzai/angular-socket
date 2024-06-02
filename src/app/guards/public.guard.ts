import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/dashboard']); // Redirect to login page if not authenticated
      return false; // Prevent access to the route
    }
  }
  
}
