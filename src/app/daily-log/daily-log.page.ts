import { Component, OnInit } from '@angular/core';
import { DailyLogService } from './daily-log.service';
import { CreateDailyLogComponent } from './create-daily-log/create-daily-log.component';
import { EditDailyLogComponent } from './edit-daily-log/edit-daily-log.component';
import { PopoverController } from '@ionic/angular';
import { DailyLog } from './daily-log';
import { DailyLogDay } from './daily-log-day';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.page.html',
  styleUrls: ['./daily-log.page.scss']
})

export class DailyLogPage implements OnInit {

  date:string;
  signifier:string;
  status:string;
  today = new Date();
  private accessToken:string = "";

  dailyLogs1 = [
    new DailyLog({
      "key": "1",
      "date": "2019-05-18",
      "signifier": "t",
      "text": "Tarefa ativa",
      "status": "a"
    }),
    new DailyLog({
      "key": "2",
      "date": "2019-05-18",
      "signifier": "e",
      "text": "Esse é um evento",
      "status": "a"
    }),
    new DailyLog({
      "key": "3",
      "date": "2019-05-18",
      "signifier": "n",
      "text": "Esse é um comentário",
      "status": "a"
    })
  ];

  dailyLogs2 = [
    new DailyLog({
      "key": "4",
      "date": "2019-05-19",
      "signifier": "t",
      "text": "Tarefa concluída",
      "status": "d"
    }),
    new DailyLog({
      "key": "5",
      "date": "2019-05-19",
      "signifier": "t",
      "text": "Tarefa postponed",
      "status": "p"
    }),
    new DailyLog({
      "key": "6",
      "date": "2019-05-19",
      "signifier": "t",
      "text": "Tarefa future log",
      "status": "f"
    }),
    new DailyLog({
      "key": "7",
      "date": "2019-05-19",
      "signifier": "t",
      "text": "Tarefa abandonada",
      "status": "i"
    })
  ];

  dailyLogDays = [
    new DailyLogDay({"date": "2019-05-18", "dailyLogs": this.dailyLogs1}),
    new DailyLogDay({"date": "2019-05-19", "dailyLogs": this.dailyLogs2})
  ];

  constructor(private dailyLogService: DailyLogService,
    private popoverCtrl: PopoverController,
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

  async createDailylog(date:string) {
    const popover = await this.popoverCtrl.create({
        component: CreateDailyLogComponent,
        animated: true,
        showBackdrop: true,
        componentProps: { popoverController: this.popoverCtrl, date: date }
    });
    return await popover.present();
  }

  async editDailylog(currentLog:DailyLog) {
    const popover = await this.popoverCtrl.create({
        component: EditDailyLogComponent,
        animated: true,
        showBackdrop: true,
        componentProps: { popoverController: this.popoverCtrl, currentLog: currentLog }
    });
    return await popover.present();
  }

  requestDailylogdays(date1: string, date2: string){

  }
    
  logout() {
    this.storage.set('BuJoToken','');
    this.router.navigate(['login']);
  }

}