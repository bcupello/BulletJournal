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
    this.router.navigate(['daily-log']);
    this.storage.get('BuJoToken').then(
      (val) => {
        this.accessToken = val;
        console.log(val);
        if (this.accessToken == null) {
          this.router.navigate(['login']);
        }
        
      }
    ).catch(
      () => {
        console.log("token apagado");
        this.router.navigate(['login']);
      }
    );
  }

  logout() {
    this.storage.remove('BuJoToken').then(
      () => {
        console.log("token apagado");
        this.router.navigate(['login']);
      }
    );
    
  }

}
