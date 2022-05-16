import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtTokenService } from '../../services/jwt-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private jwtToken: JwtTokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this.jwtToken.getToken();
    if (token !== undefined && token !== null && token !== '') {
      if (this.jwtToken.isTokenExpired()) {
        this.router.navigate(['unauthorized']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['unauthorized']);
      return false;
    }
  }
}
