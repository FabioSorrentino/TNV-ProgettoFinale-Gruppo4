import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  logout(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    //console.log(token);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(userId: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, userId);
  }
  public getUserId(): any {
    const userId = window.sessionStorage.getItem(USER_KEY);
    if (userId) {
      return Number.parseInt(userId);
    }
    return {};
  }
}
