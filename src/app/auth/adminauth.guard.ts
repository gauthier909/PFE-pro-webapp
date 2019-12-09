import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { AuthService} from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuardA implements CanActivate,CanActivateChild,CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  canActivateChild(
    routes: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    return this.canActivate(routes, state);
  }
  canLoad(route: Route){
    let url = '/${route.path}';
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean{
    if (this.authService.isAdmin) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    let sessionId = 34;
    let navigationExtra: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    }
    // Navigate to the login page with extras
    this.router.navigate(['/auth/login'],navigationExtra);
    return false;
  }
}
