import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleServices } from '../interfaces/VehicleConfig';


@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  private api="http://localhost:8080/services";

  constructor(private http:HttpClient) { }

  getService():Observable<VehicleServices[]>{

    return this.http.get<VehicleServices[]>(`${this.api}`);
  }

  createVehicleService(vehicleserv:VehicleServices):Observable<Object>{

    return this.http.post(`${this.api}`,vehicleserv);
  }

  getServiceByID(id:String):Observable<VehicleServices>{

    return  this.http.get<VehicleServices>(`${this.api}/${id}`);
  }


  updateServices(id:String,service:VehicleServices):Observable<Object>{
    return this.http.put(`${this.api}/${id}`,service);
  }

  deleteService(id:String):Observable<Object>{

    return this.http.delete(`${this.api}/${id}`)
  }
}
