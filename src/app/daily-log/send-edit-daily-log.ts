import { DailyLog } from './daily-log';

export class SendEditDailyLog {

    key: string
    signifier: string
    text: string

    constructor(log: DailyLog) {
        this.key = log.key;
        this.signifier = log.signifier;
        this.text = log.text;
    }
}
