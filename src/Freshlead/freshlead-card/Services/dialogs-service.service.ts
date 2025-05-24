import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http';
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

  saverefrence(data:any):Observable<any>{
    return this.http.post("http://localhost:81/api/Leads/AddCustomerRefrenceDetails",data)
  }

   getAllrefrenceById(userId: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/GetCustomerRefrenceById/${userId}`).pipe(map(response=>response.result));
  }

removeContact(id: number): Observable<any> {
  const params = new HttpParams().set('id', id.toString());
  return this.http.post<any>(`${this.baseUrl}/RemoveAddress`, {}, { params });
}
saveemploydetails(data:any):Observable<any>{
    return this.http.post("http://localhost:81/api/Leads/AddCustomerEmploymentDetails",data)
  }


removeRefrence(id: number): Observable<any> {
  const params = new HttpParams().set('id', id.toString());
  return this.http.post<any>(`${this.baseUrl}/RemoveRefrence`, {}, { params });
}

  getAllemploymentId(userId: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/GetCustomeEmploymentId/${userId}`).pipe(map(response=>response.result));
  }
  removeemploymentdetails(id: number): Observable<any> {
  const params = new HttpParams().set('id', id.toString());
  return this.http.post<any>(`${this.baseUrl}/RemoveEmpoymentDetails`, {}, { params });
}

saveassestdetails(data:any):Observable<any>{
    return this.http.post("http://localhost:81/api/Leads/AddCustomerAssetDetails",data)
  }

  getAassestdetailsbyId(userId: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/GetAssetDetailsByID/${userId}`).pipe(map(response=>response.result));
  }

  saveredflagdetails(data:any):Observable<any>{
    return this.http.post("http://localhost:81/api/Leads/AddCustomerRedFlagDetails",data)
  }

  GetCustomerRedflagDetailsByID(userId: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/GetCustomerRedflagDetailsByID/${userId}`).pipe(map(response=>response.result));
  }
}
