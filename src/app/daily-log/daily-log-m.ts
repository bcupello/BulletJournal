import { DailyLog } from './daily-log';

export class DailyLogM {
    Key: string;
    Date: string;
    Signifier: string;
    Text: string;
    Status: string;

    constructor(dl?: DailyLog){
        if (dl) {
            this.Key = dl.key;
            this.Date = dl.date;
            this.Signifier = dl.signifier;
            this.Text = dl.text;
            this.Status = dl.status;
        } else {
            this.Key = "";
            this.Date = "";
            this.Signifier = "";
            this.Text = "";
            this.Status = "";
        }
    }

}
