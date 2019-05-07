import { Component, OnInit } from '@angular/core';
import { FutureLogService } from './future-log.service';

@Component({
  selector: 'app-future-log',
  templateUrl: './future-log.page.html',
  styleUrls: ['./future-log.page.scss'],
})
export class FutureLogPage implements OnInit {

	text: string = 'World';

  constructor(private futureLogService: FutureLogService) { }

  ngOnInit() {
  }

  changeText() {
		this.text = this.futureLogService.getText();
  }

}
