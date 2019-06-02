import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';
import { Token } from 'src/app/models/Token';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageAppService {
  constructor() {}

  private static readonly LOCAL_KEY_USER: string = 'user_logged';
  private static readonly LOCAL_KEY_TOKEN: string = 'token';

  static getUserLogged(): User {
    const str = localStorage.getItem(LocalStorageAppService.LOCAL_KEY_USER);
    try {
      return JSON.parse(str);
    } catch (error) {
      return null;
    }
  }

  static setUserLogged(user: User): void {
    if (user == null) {
      localStorage.removeItem(LocalStorageAppService.LOCAL_KEY_USER);
    } else {
      localStorage.setItem(LocalStorageAppService.LOCAL_KEY_USER, JSON.stringify(user));
    }
  }

  static getToken(): Token {
    const str = localStorage.getItem(LocalStorageAppService.LOCAL_KEY_TOKEN);
    try {
      return JSON.parse(str);
    } catch (error) {
      return null;
    }
  }

  static setToken(token: Token): void {
    if (token == null) {
      localStorage.removeItem(LocalStorageAppService.LOCAL_KEY_USER);
    } else {
      localStorage.setItem(LocalStorageAppService.LOCAL_KEY_TOKEN, JSON.stringify(token));
    }
  }
}
