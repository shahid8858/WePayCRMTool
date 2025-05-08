import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { KeyValuePipe, CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { SidenavbarComponent } from "../../../Navbar/navbar/sidenavbar/sidenavbar.component";
import { CustomeridService } from './customerid.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLoanApplicationComponent } from '../update-loan-application/update-loan-application.component';
import { NavbarComponent } from "../../../Navbar/navbar/navbar.component";


@Component({
  selector: 'app-customerprofile',
  standalone: true, // 👈 this makes the component standalone
  imports: [CommonModule, MatCardModule, MatExpansionModule, MatIcon, MatDialogModule,], // 👈 import what you use in the template
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']  // <- styles go here

})
export class CustomerprofileComponent implements OnInit {
  customerData: any;
  showCustomer = false;
  showaddress=true;
  addressDat:any;
  columns: { label: string, key: string }[] = [];
  // private leads = [
  //   {
  //     id: '1EB5DD91-5108-4AA3-8692-29C2F48B3AC7',
  //     loanPurpose:'Medical Emergency',
  //     'Tele Caller': 'Aman',
  //     'credit manager': 'Karishma',
  //     'Customer Name': 'Test',
  //     email: 'shhaid8858883@gmail.com',
  //     'phone no': '123456789',
  //     'required amount': '100',
  //     'monthly income': '500',
  //     city: 'Noida',
  //     state: 'UP',
  //     'loan status':'Fresh Lead',
     
  //     pincode: '201305',
  //     'utm source': 'website',
  //     domain: 'WePayLoan',
  //     'customer status': 'Fresh Customer',
  //     status: 'Fresh Lead',
  //     'created at': '08-04-2025',
  //     'updated at': '09-04-2025'
  //   }
  // ];
  leads: any[] = [];
  

  constructor(
    private customeridService: CustomeridService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customeridService.getLeadById(id).subscribe(data => {
        this.customerData = data;
        console.log('Customer Data:', this.customerData);
          // After data loaded, prepare the columns
          this.columns = [
            { label: 'Loan Purpose', key: 'purpose' },
            { label: 'Monthly Income', key: 'monthlyIncome' },
            { label: 'Loan Required', key: 'loanRequired' },
            { label: 'City', key: 'city' },
            { label: 'State', key: 'state' },
            { label: 'Pincode', key: 'pinCode' },
            { label: 'Loan Status', key: 'status' },
            { label: 'Customer Status', key: 'loanCount' },
            { label: 'Assigned Tele Caller', key: 'callerName' },
            { label: 'Assigned Credit Manager', key: 'credMgrName' },
            { label: 'Created At', key: 'createdAt' }
            
          ];
          
      });
      
      
    }
  }
  
  toggleCustomer() {
    this.showCustomer = !this.showCustomer;
  }
  toggleaddress() {
   
  }
  onEditClick(event: Event) {
    event.stopPropagation(); // Prevent toggling the panel
    console.log("Edit clicked");
    // Your logic here
  }
  // Method to handle editing loan application
editLoanApplication() {
  this.showCustomer = !this.showCustomer;
  console.log('Edit Loan Application clicked');
  // Add logic for editing loan application details
}
selectItem(event: Event) {
  const items = document.querySelectorAll('.topcard-item');
  items.forEach(item => item.classList.remove('selected')); // Remove 'selected' from all items
  (event.target as HTMLElement).classList.add('selected'); // Add 'selected' to the clicked item
}

openEditDialog() {
  const dialogRef = this.dialog.open(UpdateLoanApplicationComponent, {
    width: '500px',
    data: { customer: { ...this.customerData } }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Updated customer from dialog:', result);

      // Example API call to update
      this.customeridService.updateLoanRequest(result).subscribe(
        (response) => {
          console.log('Customer updated successfully!', response);
          // After successful update, re-fetch fresh customer details
          const id = this.route.snapshot.paramMap.get('id');
          if (id) {
            this.customeridService.getLeadById(id).subscribe(data => {
              this.customerData = data;
              console.log('Refetched updated Customer Data:', this.customerData);
            });
          }
        },
        (error) => {
          console.error('Failed to update customer', error);
        }
      );
    }
  });
}

// Method to handle editing address details
editAddressDetails() {
  console.log('Edit Address Details clicked');
  // Add logic for editing address details
}
openPreScreenForm()
{}
name = '';

getInitials(name: string): string {
  if (!name) return '';
  return name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase();
}


leadId: string = 'LEAD123456';
customerId: string = 'CUST654321';
copyToClipboard(value: string) {
  navigator.clipboard.writeText(value).then(() => {
    console.log(`${value} copied to clipboard`);
    // Optional: Show a snackbar or toast here
  });
}
}
