import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//import { AccountService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class ReRoute implements CanActivate {
    constructor(
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        this.router.navigate(['/account/register']);
        return false;
    }
}