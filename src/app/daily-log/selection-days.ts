export class SelectionDays {
  day1:String;
  day2:String;

  constructor(options?: {day1: String; day2:String;}){
    if(options){
      this.day1 = options.day1;
      this.day2 = options.day2;
    }
    else{
      this.day1 = "";
      this.day2 = "";
    }
  }

}
