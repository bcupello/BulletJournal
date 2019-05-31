import { Component, OnInit } from '@angular/core';
import { MonthlyLogService } from './monthly-log.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthly-log',
  templateUrl: './monthly-log.page.html',
  styleUrls: ['./monthly-log.page.scss'],
})
export class MonthlyLogPage implements OnInit {

  text: string = 'Pudim?';
  private accessToken:string = "";

  constructor(private monthlyLogService: MonthlyLogService,
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
    this.storage.clear();
    this.storage.set('BuJoToken','');
    this.router.navigate(['login']);
  }

  changeText() {
		this.text = this.monthlyLogService.getText();
  }

}
