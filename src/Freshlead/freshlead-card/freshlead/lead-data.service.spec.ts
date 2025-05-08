import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private leads: any[] = [];

  // Store the list of leads
  setLeads(leads: any[]): void {
    this.leads = leads;
  }

  // Get a single lead based on ID
  getLeadById(id: string): any | undefined {
    return this.leads.find((lead) => lead.id === id);
  }
}
