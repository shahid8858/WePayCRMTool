import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiUrl = 'http://localhost:82/api/Leads/GetAllFreshLeads';

  constructor(private http: HttpClient) {}

  getAllLeads(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.result)
    );
  }
}
