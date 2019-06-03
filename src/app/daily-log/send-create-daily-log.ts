import { DailyLog } from './daily-log';

export class SendCreateDailyLog {

    date: string
    signifier: string
    text: string

    constructor(log:DailyLog) {
        this.date = log.date;
        this.signifier = log.signifier;
        this.text = log.text;
    }

}
