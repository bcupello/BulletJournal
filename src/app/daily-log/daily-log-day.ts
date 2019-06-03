import { DailyLogM } from './daily-log-m';

export class DailyLogDay {
	Date: string;
	DailyLogs: DailyLogM[];

	constructor(options?: {date: string; DailyLogs: DailyLogM[]}){
    if (options) {
      this.Date = options.date;
      this.DailyLogs = options.DailyLogs;
    }
    else{
      this.Date = "";
      this.DailyLogs = [];
    }
  }
}
