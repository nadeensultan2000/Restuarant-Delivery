import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
constructor(private authService:AuthService,private router :Router){

}
// canActivate(
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): boolean {
//   if (this.authService.isLoggedIn()) {
//     return true;
//   }
  
//   this.router.navigate(['/login']);
//   return false;
// }
  
}
