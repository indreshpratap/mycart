import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { SecurityService } from "app/login/security.service";

@Injectable()
export class SecurityGuard implements CanActivate {

    constructor(private router: Router, private secService: SecurityService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.secService.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }

    }
}