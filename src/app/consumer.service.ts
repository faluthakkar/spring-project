import { Injectable } from '@angular/core';
import { Consumer} from './consumer';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  url: string;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/consumer";
  }

  public findAll():
Observable<Consumer[]>{
  return this.http.get<Consumer[]>("http://localhost:8080/consumer");
}


public getById(id:number):Observable<Consumer>{
  return this.http.get<Consumer>("http://localhost:8080/consumer/" + id);
}


public saveConsumer():Observable<Consumer>{
  return this.http.post<Consumer>("http://localhost:8080/consumer",{
    "id": Number,
    "firstName":String,
    "lastName":String,
    "addedOn":String
  })
}

public deleteById(id:number):Observable<Consumer>{
  return this.http.delete<Consumer>("http://localhost:8080/consumer/" + id);
}

                                                             
public updatebyId(id:number):Observable<Consumer>{
  return this.http.put<Consumer>("http://localhost:8080/consumer/" + id,{
    "firstName":String,
    "lastName":String
  }
  );
    
}
  }



