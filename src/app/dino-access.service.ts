import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DinoAccessService {

  constructor(private client: HttpClient) { }

  getDinosaurs(){
    return this.client
    .get('/api/dinos/');
  }

}
