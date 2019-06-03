import { DailyLog } from './daily-log';

export class SendPostponeDailyLog {
    
    key: string
    postPone: boolean
    postPoneDate: string

    constructor(log: DailyLog) {
        this.key = log.key;
        this.postPone = true;
        this.postPoneDate = log.date;
    }
}
