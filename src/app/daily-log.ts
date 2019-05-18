export class DailyLog {
  key: string;
  date: string;
  signifier: string;
  text: string;
  status: string;

  constructor(options?: {key: string; date: string; signifier: string; text: string; status: string;}){
    if (options) {
      this.key = options.key;
      this.date = options.date;
      this.signifier = options.signifier;
      this.text = options.text;
      this.status = options.status;
    }
    else{
      this.key = "";
      this.date = "";
      this.signifier = "";
      this.text = "";
      this.status = "";
    }
  }
}
