import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FutureLogService {

  constructor() { }

  getText() {
  	return "Pudim";
    // return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
    //   map(results => results['Search'])
    // );
  }
}
