import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DialogsServiceService {

  constructor(private http:HttpClient) { }

  // baseUrl:string="http://localhost:82/api/Leads"
  baseUrl:string="http://localhost:81/api/Leads"
  saveAddress(data :any):Observable<any>{
    return this.http.post("http://localhost:81/api/Leads/AddCustomerAddresDetails",data);
    // return this.http.post("http://localhost:82/api/Leads/AddCustomerAddresDetails",data);

  }

  getAllAddressesById(userId: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/GetCustomerAddresById/${userId}`).pipe(map(response=>response.result));
  }
}
