import { DailyLogDay } from './daily-log-day';

export class DailyLogResponse {

    Status:number;
    NewAccessToken:string;
    Message:string;
    DailyLogDays:DailyLogDay[];

    constructor(options?:{ Status:number, AccessToken:string, Message:string, DailyLogDays:DailyLogDay[] }) {
        if (options) {
            this.Status = options.Status;
            this.Message = options.Message;
            this.NewAccessToken = options.AccessToken;
            this.DailyLogDays = options.DailyLogDays;
        } else {
            this.NewAccessToken = "";
            this.Message = "";
            this.Status = 400;
            this.DailyLogDays = [];
        }
    }

}
