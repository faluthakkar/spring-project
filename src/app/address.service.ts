import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) {}
  private baseURL = "http://localhost:8080/address";
  

getAddressList(): Observable<Address[]>{
  return this.http.get<Address[]>(`${this.baseURL}`);
}

public addAddress(address:any){
  return this.http.post(`${this.baseURL}`,address);
    
  }
}

