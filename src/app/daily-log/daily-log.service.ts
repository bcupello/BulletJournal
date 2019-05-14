import { Injectable } from '@angular/core';
import { DailyLog } from './daily-log';


@Injectable({
  providedIn: 'root'
})

export class DailyLogService {

 
  constructor() { }

  createDailyLogService(log: DailyLog){
    return true;
  }


}
