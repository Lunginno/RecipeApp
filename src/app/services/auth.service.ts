import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() { }

  login() {
    // Logic to authenticate user, e.g., API call
    this.isAuthenticated = true;
  }

  logout() {
    // Logic to log out user
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
