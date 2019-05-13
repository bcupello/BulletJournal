import { Component, OnInit } from '@angular/core';
import { DailyLogService } from './daily-log.service';
import { CreateDailyLogComponent } from './create-daily-log/create-daily-log.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.page.html',
  styleUrls: ['./daily-log.page.scss']
})

export class DailyLogPage implements OnInit {

  text:string;
  date:string;
  text2:string;
  date2:string;
  signifier:string;
  status:string;

  constructor(private dailyLogService: DailyLogService, private popoverCtrl: PopoverController) { }

  setDate() {
    this.date = "2019-05-11";
  }

  setText() {
    this.text = "Tarefa ativa";
  }

  setDate2() {
    this.date2 = "2019-05-12";
  }

  setText2() {
    this.text2 = "Tarefa concluída";
  }

  ngOnInit() {
    this.setDate();
    this.setText();
    this.setDate2();
    this.setText2();
  }

  async createdailylog(ev: any) {
    const popover = await this.popoverCtrl.create({
        component: CreateDailyLogComponent,
        event: ev,
        animated: true,
        showBackdrop: true,
        componentProps: { popoverController: this.popoverCtrl }
    });
    return await popover.present();
  }

}