import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  sto: string = "teste";

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.set('age', this.sto);
  }

  changeText() {
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
  }

}
