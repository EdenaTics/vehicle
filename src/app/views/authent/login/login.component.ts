import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthentService } from 'src/app/shared/services/auth/authent.service';
import { stringify } from 'querystring';
import { Error } from 'src/app/models/Error';
import { IAuthent } from 'src/app/shared/services/auth/authent.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private authentService: IAuthent;

  constructor(private router: Router, authentService: AuthentService) {
    this.authentService = authentService;
  }

  ngOnInit() {
    this.authentService.setTokenStorage(null);
  }

  onLogin(form: NgForm) {
    console.log(form.value);
    this.authentService.getToken(form.value.login, form.value.password).subscribe(
      value => {
        this.authentService.setTokenStorage(value);
        console.log(value.access_token);
        this.router.navigate(['']);
      },
      error => {
        console.log(error.error);
        const errorBean: Error = error.error;
      },
      () => {
        console.log('Fini !');
        console.log(this.authentService.getTokenStorage().access_token);
      }
    );
  }
}
