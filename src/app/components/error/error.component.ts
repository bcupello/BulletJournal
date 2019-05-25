import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {

  popover: PopoverController;

  constructor(navParams: NavParams) {
    this.popover = navParams.get('popoverController');
  }

  ngOnInit() {}

}
