import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CompanyConfiguration } from '../interfaces/CompanyConfig';

@Injectable({
  providedIn: 'root'
})
export class ComapnyConfigService {


  private api="http://localhost:8080/company";


  constructor(private http:HttpClient) { }

 

  getCompany():Observable<CompanyConfiguration[]>{

  return this.http.get<CompanyConfiguration[]>(`${this.api}`);
}

createCompany(company:CompanyConfiguration): Observable<Object>{


  return this.http.post(`${this.api}`,company);

}

getCompanybyID(id:String):Observable<CompanyConfiguration>{

  return this.http.get<CompanyConfiguration>(`${this.api}/${id}`);
}

updateCompany(id:String, company:CompanyConfiguration):Observable<Object>{

  return this.http.put(`${this.api}/${id}`,company);
}

deleteCompany(id:String):Observable<Object>{

  return this.http.delete(`${this.api}/${id}`);
}


}
