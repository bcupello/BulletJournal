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
  dailyLogs1 = [
    new DailyLog({
      "key": "11bc63c8-859f-11e9-9917-4e9cc02ce1e5",
      "date": "2019-05-18",
      "signifier": "t",
      "text": "Essa é uma tarefa ativa",
      "status": "a"
    }),
    new DailyLog({
      "key": "2",
      "date": "2019-05-18",
      "signifier": "e",
      "text": "Esse é um evento",
      "status": "a"
    }),
    new DailyLog({
      "key": "3",
      "date": "2019-05-18",
      "signifier": "n",
      "text": "Esse é um comentário",
      "status": "a"
    })
  ];

  dailyLogs2 = [
    new DailyLog({
      "key": "4",
      "date": "2019-05-19",
      "signifier": "t",
      "text": "Tarefa concluída",
      "status": "d"
    }),
    new DailyLog({
      "key": "5",
      "date": "2019-05-19",
      "signifier": "t",
      "text": "Tarefa postponed",
      "status": "p"
    }),
    new DailyLog({
      "key": "6",
      "date": "2019-05-19",
      "signifier": "t",
      "text": "Tarefa future log",
      "status": "f"
    }),
    new DailyLog({
      "key": "7",
      "date": "2019-05-19",
      "signifier": "t",
      "text": "Tarefa abandonada",
      "status": "i"
    })
  ];

  dailyLogDays = [
    new DailyLogDay({"date": "2019-05-18", "dailyLogs": this.dailyLogs1}),
    new DailyLogDay({"date": "2019-05-19", "dailyLogs": this.dailyLogs2})
  ];

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
    console.log(selectionDays.day1, selectionDays.day2);
    return this.dailyLogDays;
    // let headers;
    // let x = await this.storage.get('BuJoToken');
    // x.then((val) => {
    //     console.log('val: ', val);
    //     headers = {
    //       "Access_Token": val,
    //       "Content-Type":"application/json"
    //     };
    // })
    // .catch(() => {
    //   headers = {
    //     "Access_Token": "",
    //     "Content-Type":"application/json"
    //   };
    // });

    // const httpOptions = new HttpHeaders(headers);
    // const api = new Api();
    // console.log('httpOptions: ', httpOptions);
    // console.log('headers: ', headers);
    // return this.http.get(api.url+'daily-log/' + selectionDays.day1 + '/' + selectionDays.day2, {headers: httpOptions});
    
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
