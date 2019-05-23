import { Component, OnInit } from '@angular/core';
import { FutureLogService } from './future-log.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-future-log',
  templateUrl: './future-log.page.html',
  styleUrls: ['./future-log.page.scss'],
})
export class FutureLogPage implements OnInit {

  text: string = 'World';
  private accessToken:string = "";

  constructor(private futureLogService: FutureLogService,
    private storage:Storage,
    private router:Router) { }

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

  changeText() {
		this.text = this.futureLogService.getText();
  }

}
