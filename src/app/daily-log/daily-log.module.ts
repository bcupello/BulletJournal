import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DailyLogPage } from './daily-log.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateDailyLogComponent } from './create-daily-log/create-daily-log.component';
import { EditDailyLogComponent } from './edit-daily-log/edit-daily-log.component';


const routes: Routes = [
  {
    path: '',
    component: DailyLogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  entryComponents: [CreateDailyLogComponent, EditDailyLogComponent],
  declarations: [DailyLogPage, CreateDailyLogComponent, EditDailyLogComponent]  
})
export class DailyLogPageModule {}
