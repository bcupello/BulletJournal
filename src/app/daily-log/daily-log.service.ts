import { Injectable } from '@angular/core';
import { DailyLog } from './daily-log';
import { DailyLogDay } from './daily-log-day';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Api } from '../api';
import { SelectionDays } from './selection-days';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { SendCreateDailyLog } from './send-create-daily-log';
import { SendDoneDailyLog } from './send-done-daily-log';
import { SendIrrelevantDailyLog } from './send-irrelevant-daily-log';
import { SendPostponeDailyLog } from './send-postpone-daily-log';
import { SendEditDailyLog } from './send-edit-daily-log';


@Injectable({
  providedIn: 'root'
})

export class DailyLogService {

  private token: string;

  constructor(private storage: Storage, private http:HttpClient) {
    this.storage.get('BuJoToken').then(
      (val) => {
        console.log('entrou e recebeu token');
        this.token = val;
      }
    ).catch(
      () => {
        console.log('entrou e n recebeu');
        this.token = '';
      }
    );
   }

  getDailyLogDays(selectionDays: SelectionDays){
    
    const api = new Api();
    const headers = new HttpHeaders().set("Content-Type","application/json")
    .set("Access_Token",this.token);
    return this.http.get(api.url+'daily-log/'+
    selectionDays.day1+'/'+selectionDays.day2, {headers});
    
  }

  createDailyLogService(log: DailyLog): Observable<Object> {
    const api = new Api();
    const headers = new HttpHeaders().set("Content-Type","application/json")
    .set("Access_Token",this.token);
    let send = new SendCreateDailyLog(log);
    console.log({headers});
    console.log(send);
    console.log(this.token);
    return this.http.put(api.url+'daily-log/', send, {headers});
  }

  editDailyLogService(log: DailyLog): Observable<Object> {
    const api = new Api();
    const headers = new HttpHeaders().set("Content-Type","application/json")
    .set("Access_Token",this.token);
    let send = new SendEditDailyLog(log);
    console.log(send);
    console.log(this.token);
    return this.http.post(api.url+'daily-log/', send, {headers});
  }

  toDoneDailyLogService(log: DailyLog): Observable<Object>{
    const api = new Api();
    const headers = new HttpHeaders().set("Content-Type","application/json")
    .set("Access_Token",this.token); 
    let send = new SendDoneDailyLog(log, true);
    console.log(send);
    console.log(this.token);
    return this.http.post(api.url+'daily-log/', send, {headers});
  }

  toBeDoneDailyLogService(log: DailyLog){
    const api = new Api();
    const headers = new HttpHeaders().set("Content-Type","application/json")
    .set("Access_Token",this.token);
    let send = new SendDoneDailyLog(log, false);
    console.log(send);
    console.log(this.token);
    return this.http.post(api.url+'daily-log/', send, {headers});
  }

  toNotDoingDailyLogService(log: DailyLog){
    const api = new Api();
    const headers = new HttpHeaders().set("Content-Type","application/json")
    .set("Access_Token",this.token);
    let send = new SendIrrelevantDailyLog(log, true);
    console.log(send);
    console.log(this.token);
    return this.http.post(api.url+'daily-log/', send, {headers});
  }

  toDoingAgainDailyLogService(log: DailyLog){
    const api = new Api();
    const headers = new HttpHeaders().set("Content-Type","application/json")
    .set("Access_Token",this.token);
    let send = new SendIrrelevantDailyLog(log,false);
    console.log(send);
    console.log(this.token);
    return this.http.post(api.url+'daily-log/', send, {headers});
  }

  postponeDailyLogService(log: DailyLog){
    const api = new Api();
    const headers = new HttpHeaders().set("Content-Type","application/json")
    .set("Access_Token",this.token);
    let send = new SendPostponeDailyLog(log);
    console.log(send);
    console.log(this.token);
    return this.http.post(api.url+'daily-log/', send, {headers});
  }

  // toFutureLogDailyLogService(log: DailyLog){
  //   return false;
  // }

}
