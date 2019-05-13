import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  typepass: string = "password";
  clickp: number = 0;

  constructor() { }

  ngOnInit() {
  }

  register(form) {
    console.log("funfou");
  }

  showPass() {
    if (this.clickp==0) {
      this.typepass="text";
      this.clickp=1;
    } else {
      this.typepass="password";
      this.clickp=0;
    }
  }
}