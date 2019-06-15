import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { IAuthent } from '../services/auth/authent.interface';
import { AuthentService } from '../services/auth/authent.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private authentService: IAuthent;
  constructor(private router: Router, authentService: AuthentService) {
    this.authentService = authentService;
  }

  canActivate() {
    if (this.authentService.getTokenStorage() != null) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
