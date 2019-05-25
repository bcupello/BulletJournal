import { User } from '../user';

export class RegisterResponse {

    Status:number;
    User:User;
    messages:string;

    constructor(options?:{ Status:number, User:User, messages:string }) {
        if (options) {
            this.Status = options.Status;
            this.User = options.User;
            this.messages = options.messages;
        } else {
            this.Status = 400;
            this.User = new User();
            this.messages = "";
        }
    }
    
}
