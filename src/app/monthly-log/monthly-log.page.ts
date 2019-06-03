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
    this.router.navigate(['daily-log']);
    this.storage.get('BuJoToken').then(
      (val) => {
        this.accessToken = val;
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

  changeText() {
		this.text = this.monthlyLogService.getText();
  }

}
