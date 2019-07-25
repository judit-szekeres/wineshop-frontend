import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { UserHttpService } from './services/user-http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserHttpService,
        private router: Router
    ) {}

    canActivate(): Observable<boolean | UrlTree> {
        return this.userService.isUserLoggedIn()
            .pipe( map( loggedIn => loggedIn ? loggedIn : this.router.createUrlTree(['/log-reg']) ) );
    }
}
