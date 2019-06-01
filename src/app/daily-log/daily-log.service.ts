import { Injectable } from '@angular/core';
import { DailyLog } from './daily-log';
import { DailyLogDay } from './daily-log-day';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Api } from '../api';
import { SelectionDays } from './selection-days';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DailyLogService {

  private token: string;
  dailyLogs1 = [
    new DailyLog({
      "key": "1",
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
        // console.log('entrou e recebeu token');
        this.token = val;
      }
    ).catch(
      () => {
        // console.log('entrou e n recebeu');
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
    const headers = new HttpHeaders().set("Content-Type","application/json").set("Access_Token",this.token); 
    return this.http.put(api.url+'daily-log/', log, {headers});
  }

  editDailyLogService(log: DailyLog){
    return true;
  }

  toDoneDailyLogService(log: DailyLog){
    return true;
  }

  toBeDoneDailyLogService(log: DailyLog){
    return true;
  }

  toNotDoingDailyLogService(log: DailyLog){
    return true;
  }

  toDoingAgainDailyLogService(log: DailyLog){
    return true;
  }

  postponeDailyLogService(log: DailyLog){
    return true;
  }

  toFutureLogDailyLogService(log: DailyLog){
    return true;
  }

}
