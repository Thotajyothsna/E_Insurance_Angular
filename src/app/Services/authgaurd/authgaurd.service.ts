import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate{

  constructor(private router: Router) { }

  canActivate():boolean {
     if (typeof window !== 'undefined' && localStorage) {
    const token = localStorage.getItem('token');
    if(token) return true;
    else return false;
     }
    else{
      this.router.navigate(['login']);
      return false;
    }
    // if (typeof window !== 'undefined') {
    //   const token = localStorage.getItem('token');
    //   if (token) return true;
    // }

    // If not in browser or no token, redirect to login
    // this.router.navigate(['/login']);
    // return false;
  }
}
