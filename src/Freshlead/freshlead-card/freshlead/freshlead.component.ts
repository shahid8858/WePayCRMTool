import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // ✅ Add this
import { LeadService } from './lead-data.service';
import { from, Observable } from 'rxjs'; // ✅ Make sure this is imported



@Component({
  selector: 'app-freshlead',
  standalone: true,
  imports: [
    MatButtonModule, FormsModule, MatTableModule, MatCardModule,
    MatDividerModule, MatDateRangeInput, MatDateRangePicker,
    MatIconModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatNativeDateModule, MatPaginatorModule,RouterModule,CommonModule,
  ],
  templateUrl:'./freshlead.component.html',
  styleUrls: ['./freshlead.component.css']
})
export class FreshleadComponent implements AfterViewInit {
  displayedColumns: string[] =  [
    'actions','callerName','credMgrName','customerName','email','phoneNo','loanRequired','monthlyIncome','city', 'state' ,'pinCode','utmSource','domain','status','createdAt','updatedAt'

  ];
  
  // Injecting the router
  // constructor(private router: Router) {}

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

   leads: any[] = [this.dataSource];

  constructor(private leadService: LeadService) {}

  ngOnInit(): void {
    this.leadService.getAllLeads().subscribe({
      next: data => {
        console.log("Leads received:", data);
        this.leads = data;
        this.dataSource.data = data; // Bind data to the dataSource
      },
      error: err => {
        console.error("Error while fetching leads:", err);
      }
    });
  }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Date range logic
  dateRange = {
    start: null as Date | null,
    end: null as Date | null
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportToCSV() {
    const data = this.dataSource.filteredData.length ? this.dataSource.filteredData : this.dataSource.data;
    const rows = [Object.keys(data[0])];
  
    data.forEach(lead => {
      // Check if customerName exists, if not, do not include the row values
      if (lead.customerName) {
        // Sanitize the customerName to make sure no unwanted characters are included
        const sanitizedLead = { ...lead };
        sanitizedLead.customerName = sanitizedLead.customerName.split('\n')[0].trim();  // Trim any newline characters and extra spaces
  
        rows.push(Object.values(sanitizedLead));
      } else {
        // If customerName is missing, push an empty row with no values
        rows.push(Object.keys(lead).map(() => ''));
      }
    });
  
    // Code to handle CSV export
    const csvContent = rows.map(row => row.join(",")).join("\n");
    // Trigger the export (e.g., via a download link or file system operation)
  
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "fresh_leads.csv";
    anchor.click();
    window.URL.revokeObjectURL(url);
  }

  // Navigate to the Customer Profile Page with the selected lead's ID
  // viewLead(lead: any) {
  //   this.leadService.navigate(['/CustomerprofileComponent', lead.id]);
  // }
 
 
}