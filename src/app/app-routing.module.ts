import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'future-log',
    loadChildren: './future-log/future-log.module#FutureLogPageModule'
  },
  {
    path: 'monthly-log',
    loadChildren: './monthly-log/monthly-log.module#MonthlyLogPageModule'
  },
  {
    path: 'daily-log',
    loadChildren: './daily-log/daily-log.module#DailyLogPageModule'
  }
  // ,
  // { path: 'edit-daily-log', 
  // loadChildren: './edit-daily-log/edit-daily-log.module#EditDailyLogPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
