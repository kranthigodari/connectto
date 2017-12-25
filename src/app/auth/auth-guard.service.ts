import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { state } from '@angular/animations';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }

  // activeRoute(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) {

  // }
}