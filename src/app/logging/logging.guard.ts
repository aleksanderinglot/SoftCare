import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' })
export class LoggingGuard implements CanActivate {
    constructor(private loggingService: LoggingService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ): 
        | boolean
        | UrlTree
        | Promise<boolean | UrlTree> 
        | Observable<boolean | UrlTree> 
        {
        return this.loggingService.user.pipe(
            take(1),
            map(user => {
                const isAuth = !!user;
                if (isAuth) {
                    return true;
                }
                return this.router.createUrlTree(['/auth']);
            }));
    }
}