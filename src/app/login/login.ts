export class Login {

	email:string;
	password:string;

	constructor(options?:{ email:string, password:string }) {
		if (options) {
			this.email = options.email;
			this.password = options.password;
	} else {
			this.email = "";
			this.password = "";
		}
	}
}
