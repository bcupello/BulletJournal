import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Register } from './register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private storage: Storage, private http:HttpClient) { }

  private url = 'https://6f38194c.ngrok.io/login';

  // Faz registro de usuário
  regUser(formValues: Register): Observable<Object> {
    const headers = new HttpHeaders().set("Content-Type","application/json");
    return this.http.put(this.url, formValues, {headers});
  }
}
