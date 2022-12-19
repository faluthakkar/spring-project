import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bill } from './bill';
@Injectable({
  providedIn: 'root'
})
export class BillService {

 


  constructor(private http: HttpClient) {
  }

public findAll():
Observable<Bill[]>{
  return this.http.get<Bill[]>("http://localhost:8080/bill");
}


public getById(id:number):Observable<Bill>{
  return this.http.get<Bill>("http://localhost:8080/bill/" + id);
}



}

/*public generateBillByConnectionId() :
{
  return this.http.put("http://localhost:8080/bill/id/newReading");
 
}*/