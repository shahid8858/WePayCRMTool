import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomeridService {
  private apiUrl = 'http://localhost:82/api/Leads';  // Correct base URL for Leads API

  constructor(private http: HttpClient) {}

  // Get Lead by ID
  getLeadById(id: string): Observable<any> {
    const url = `${this.apiUrl}/GetLeadById/${id}`; // Correct API for fetching a lead by ID
    return this.http.get<any>(url).pipe(
      map(response => response.result) // Adjust this based on your API response structure
    );
  }

  // Update Loan Request
  updateLoanRequest(leadData: any): Observable<any> {
    const url = `${this.apiUrl}/UpdateLoanRequest`;  // Correct endpoint for updating loan request
    return this.http.post<any>(url, leadData);  // Using POST method to update loan
  }
}
