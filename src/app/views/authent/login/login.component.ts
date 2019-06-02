import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthentService } from 'src/app/shared/services/auth/authent.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router,
        private authentService: AuthentService) {}

    ngOnInit() {}

    onLogin(form: NgForm) {
         localStorage.setItem('isLoggedin', 'true');
         this.router.navigate(['/dashboard']);
         /*
        console.log(form.value);
        this.authentService.getToken(form.value.login, form.value.password).subscribe(
          value => {
            console.log(value);
          },
          error => {
            console.log(error);
          },
          () => {
            console.log('Fini !');
          }
        );*/
    }

}
