export class Register {
    
    email:string;
    password:string;
    name:string;
    surname:string;

    constructor(options?:{ email:string, password:string, name:string, surname:string }) {
        if (options) {
            this.email = options.email;
            this.name = options.name;
            this.password = options.password;
            this.surname = options.surname;
        } else {
            this.email = "";
            this.password = "";
            this.name = "";
            this.surname = "";
        }
        
    }
}
