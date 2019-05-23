import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { ErrorComponent } from '../error/error.component';
import { WrongRegisterComponent } from './wrong-register/wrong-register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ErrorComponent, WrongRegisterComponent],
  declarations: [RegisterPage, ErrorComponent, WrongRegisterComponent]
})
export class RegisterPageModule {}
