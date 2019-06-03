import { DailyLogM } from './daily-log-m';

export class DailyLog {
  key: string;
  date: string;
  signifier: string;
  text: string;
  status: string;

  constructor(dlm?: DailyLogM){
    if (dlm){
      this.key = dlm.Key;
      this.date = dlm.Date;
      this.signifier = dlm.Signifier;
      this.text = dlm.Text;
      this.status = dlm.Status;
    } else {
      this.key = "";
      this.date = "";
      this.signifier = "";
      this.text = "";
      this.status = "";
    }
  }
}
