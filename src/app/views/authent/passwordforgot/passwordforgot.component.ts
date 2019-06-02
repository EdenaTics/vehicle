import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-passwordforgot',
  templateUrl: './passwordforgot.component.html',
  styleUrls: ['./passwordforgot.component.scss']
})
export class PasswordforgotComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onPassword(form: NgForm) {
    console.log(form.value);
  }
}
