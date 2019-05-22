import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Login } from './login';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Api } from '../api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: Storage, private http:HttpClient) { }

  // Loga Usuário
  logUser(formValues: Login): Observable<Object> {
    const headers = new HttpHeaders().set("Content-Type","application/json");
    let api = new Api();
    return this.http.post(api.url+'login', formValues, {headers});
  }

}
