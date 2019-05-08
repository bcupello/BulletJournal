import { Component, OnInit } from '@angular/core';
import { MonthlyLogService } from './monthly-log.service';

@Component({
  selector: 'app-monthly-log',
  templateUrl: './monthly-log.page.html',
  styleUrls: ['./monthly-log.page.scss'],
})
export class MonthlyLogPage implements OnInit {

	text: string = 'Pudim?';

  constructor(private monthlyLogService: MonthlyLogService) { }

  ngOnInit() {
  }

  changeText() {
		this.text = this.monthlyLogService.getText();
  }

}
