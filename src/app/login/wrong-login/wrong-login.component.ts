import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-wrong-login',
  templateUrl: './wrong-login.component.html',
  styleUrls: ['./wrong-login.component.scss'],
})
export class WrongLoginComponent implements OnInit {

  popover: PopoverController;

  constructor(navParams: NavParams) {
    this.popover = navParams.get('popoverController');
  }

  ngOnInit() {}

}
