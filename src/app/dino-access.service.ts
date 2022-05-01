import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DinoAccessService {

  constructor(private client: HttpClient) { }

  getDinosaurs(): Observable<Array<any>>{
    // return of([]);
    return this.client
    .get<Array<any>>('/api/dinos/');
  }

}
