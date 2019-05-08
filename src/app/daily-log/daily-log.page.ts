import { Component, OnInit } from '@angular/core';
import { DailyLogService } from './daily-log.service';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.page.html',
  styleUrls: ['./daily-log.page.scss'],
})
export class DailyLogPage implements OnInit {

  constructor(private dailyLogService: DailyLogService) { }

  text: string = "lindo";

  ngOnInit() {
  }

  changeText() {
  	this.text = this.dailyLogService.getRolha();
  }

}
