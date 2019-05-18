import { DailyLog } from './daily-log';

export class DailyLogDay {
	date: string;
	dailyLogs: DailyLog[];

	constructor(options?: {date: string; dailyLogs: DailyLog[]}){
    if (options) {
      this.date = options.date;
      this.dailyLogs = options.dailyLogs;
    }
    else{
      this.date = "";
      this.dailyLogs = [];
    }
  }
}
