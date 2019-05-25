import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Register } from './register';
import { Observable } from 'rxjs';
import { Api } from '../api';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private storage: Storage, private http:HttpClient) { }

  // Faz registro de usuário
  regUser(formValues: Register): Observable<Object> {
    const headers = new HttpHeaders().set("Content-Type","application/json");
    const api = new Api();
    return this.http.put(api.url+'login', formValues, {headers});
  }
}
