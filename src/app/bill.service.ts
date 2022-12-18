import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bill } from './bill';
@Injectable({
  providedIn: 'root'
})
export class BillService {

 private baseURL:string;

  constructor(private httpClient: HttpClient) {
   this.baseURL = 'http://localhost:8080/bill';
  }

public findAll():
Observable<Bill[]>{
  return this.httpClient.get<Bill[]>(this.baseURL);
}

public generateBillByConnectionId(id:number,newReading:number){
  return this.httpClient.put(this.baseURL+id,newReading)
 
}

}



