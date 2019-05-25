import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-wrong-register',
  templateUrl: './wrong-register.component.html',
  styleUrls: ['./wrong-register.component.scss'],
})
export class WrongRegisterComponent implements OnInit {

  popover: PopoverController;

  constructor(navParams: NavParams) {
    this.popover = navParams.get('popoverController');
  }

  ngOnInit() {}

}
