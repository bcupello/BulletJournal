import { DailyLog } from './daily-log';

export class SendDoneDailyLog {
    key: string
    isDone: boolean

    constructor(log: DailyLog, isDone: boolean) {
        this.key = log.key;
        this.isDone = isDone;
    }
}
