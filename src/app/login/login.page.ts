import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  sto: string = "teste";
  typepass: string = "password";
  clickp: number = 0;

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.set('age', this.sto);
  }

  changeText() {
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
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

  register(form){
    console.log("foi");
  }

}
