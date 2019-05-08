import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthlyLogService {

  constructor() { }

  getText() {
  	return "Pudão";
    // return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
    //   map(results => results['Search'])
    // );
  }

}
