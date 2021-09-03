import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleConfiguration } from '../interfaces/VehicleConfig';

@Injectable({
  providedIn: 'root'
})
export class VehicleConfigService {
  [x: string]: any;


  private api="http://localhost:8080/vehicles";

  constructor(private http:HttpClient) { }

  getVehicle():Observable<VehicleConfiguration[]>{

    return this.http.get<VehicleConfiguration[]>(`${this.api}`);
  }

  
  createVehicle(vehicle:VehicleConfiguration):Observable<Object>{

    return this.http.post(`${this.api}`,vehicle);
  }


  getVehicleById(id:String):Observable<VehicleConfiguration>{

    return this.http.get<VehicleConfiguration>(`${this.api}/${id}`);

  }

  updateVehicles(id:String,vehicle:VehicleConfiguration):Observable<Object>{

    return this.http.put(`${this.api}/${id}`,vehicle);
  }

  deleteVehicle(id:String):Observable<Object>{

    return this.http.delete(`${this.api}/${id}`)
  }
}
