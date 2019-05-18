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

  editDailyLogService(log: DailyLog){
    return true;
  }

  toDoneDailyLogService(log: DailyLog){
    return true;
  }

  toBeDoneDailyLogService(log: DailyLog){
    return true;
  }

  toNotDoingDailyLogService(log: DailyLog){
    return true;
  }

  toDoingAgainDailyLogService(log: DailyLog){
    return true;
  }

  postponeDailyLogService(log: DailyLog){
    return true;
  }

  toFutureLogDailyLogService(log: DailyLog){
    return true;
  }

}
