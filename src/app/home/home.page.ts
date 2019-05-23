import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private accessToken: string;

  constructor(private storage:Storage,
    private router:Router) {}

  ngOnInit() {
    this.storage.get('BuJoToken').then(
      (val) => {
        this.accessToken = val;
        if (this.accessToken == '') {
          this.router.navigate(['login']);
        }
      }
    ).catch(
      () => {
        this.router.navigate(['login']);
      }
    );
  }

  logout() {
    this.storage.set('BuJoToken','');
    this.router.navigate(['login']);
  }

}
