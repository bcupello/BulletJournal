export class LoginResponse {

    Status:number;
    AccessToken:string;
    Message:string;

    constructor(options?:{ Status:number, AccessToken:string, Message:string }) {
        if (options) {
            this.Status = options.Status;
            this.Message = options.Message;
            this.AccessToken = options.AccessToken;
        } else {
            this.AccessToken = "";
            this.Message = "";
            this.Status = 400;
        }
    }
}
