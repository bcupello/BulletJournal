import { DailyLog } from './daily-log';

export class SendIrrelevantDailyLog {
    
    key: string
    isIrrelevant: boolean

    constructor(log: DailyLog, isIrrelevant: boolean) {
        this.key = log.key;
        this.isIrrelevant = isIrrelevant;
    }
}
