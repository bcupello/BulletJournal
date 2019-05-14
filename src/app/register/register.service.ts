import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private storage: Storage) { }

  retToken(form: object): string {
    return "comunica com service ok";
  }
}
