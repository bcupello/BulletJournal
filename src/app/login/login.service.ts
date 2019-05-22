import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Login } from './login';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: Storage, private http:HttpClient) { }

  private url = 'https://6f38194c.ngrok.io/login';

  // Loga Usuário
  logUser(formValues: Login): Observable<Object> {
    const headers = new HttpHeaders().set("Content-Type","application/json");
    return this.http.post(this.url, formValues, {headers});
  }

}
