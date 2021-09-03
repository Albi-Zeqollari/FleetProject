import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fleet } from '../interfaces/Fleet';

@Injectable({
  providedIn: 'root'
})
export class FleetConfigService {

  private api="http://localhost:8080/fleet";

  constructor(private http:HttpClient) { }

  getFleet():Observable<Fleet[]>{

    return this.http.get<Fleet[]>(`${this.api}`);
  }

  createFleet(fleet:Fleet):Observable<Object>{

    return  this.http.post(`${this.api}`,fleet)
  }

  getFleetById(id:String):Observable<Fleet>{
    return this.http.get<Fleet>(`${this.api}/${id}`);
  }

  updateFleet(id:String,fleet:Fleet):Observable<Object>{

   return this.http.put(`${this.api}/${id}`,fleet)
  }

  deleteFleet(id:String):Observable<Object>{

    return  this.http.delete(`${this.api}/${id}`)
  }

}
