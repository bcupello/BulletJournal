import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { WrongRegisterComponent } from './wrong-register/wrong-register.component';
import { ComponentsModule } from '../components/components.module';

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
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [WrongRegisterComponent],
  declarations: [RegisterPage, WrongRegisterComponent]
})
export class RegisterPageModule {}
