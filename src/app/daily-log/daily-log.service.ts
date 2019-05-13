import { Injectable } from '@angular/core';
import { DailyLog } from 'src/app/daily-log'


@Injectable({
  providedIn: 'root'
})

export class DailyLogService {

 
  constructor() { }

  createDailyLogService(log: DailyLog){
    return true;
  }


}
