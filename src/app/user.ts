export class User {

    Id:number;
    Email:string;
    Access_token:string;
    Token_expiry_date:string;
    Name:string;
    Surname:string;

    constructor(options?:{
        Id:number, Email:string, Access_token:string, Token_expiry_date:string,
        Name:string, Surname:string
    }) {
        if (options) {
            this.Id = options.Id;
            this.Access_token = options.Access_token;
            this.Email = options.Email;
            this.Name = options.Name;
            this.Surname = options.Surname;
            this.Token_expiry_date = options.Token_expiry_date;
        } else {
            this.Id = 0;
            this.Access_token = "";
            this.Email = "";
            this.Name = "";
            this.Surname = "";
            this.Token_expiry_date = "";
        }
    }
}
