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
import { AddAddressDialogComponentComponent } from '../Dailogs_Modules/add-address-dialog-component/add-address-dialog-component.component';
import { DialogsServiceService } from '../Services/dialogs-service.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-customerprofile',
  standalone: true, // 👈 this makes the component standalone
  imports: [CommonModule, MatCardModule, MatExpansionModule, MatIcon, MatDialogModule,MatTableModule], // 👈 import what you use in the template
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']  // <- styles go here

})
export class CustomerprofileComponent implements OnInit {
  customerData: any;
  showCustomer = false;
  showaddress=true;
  addressDat:any;
  columns: { label: string, key: string }[] = [];
  leads: any[] = [];
  customerName: string = '';

  constructor(
    private customeridService: CustomeridService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private dialogservice: DialogsServiceService
  ) {}
  ngOnInit(): void {
    this.loadAddresses(this.customerId);
      const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.loadCustomerData(id);
  }
    // if (id) {
    //   this.customeridService.getLeadById(id).subscribe(data => {
    //     this.customerData = data;
    //     console.log('Customer Data:', this.customerData);
    //       // After data loaded, prepare the columns
    //       this.columns = [
    //         { label: 'Loan Purpose', key: 'purpose' },
    //         { label: 'Monthly Income', key: 'monthlyIncome' },
    //         { label: 'Loan Required', key: 'loanRequired' },
    //         { label: 'City', key: 'city' },
    //         { label: 'State', key: 'state' },
    //         { label: 'Pincode', key: 'pinCode' },
    //         { label: 'Loan Status', key: 'status' },
    //         { label: 'Customer Status', key: 'loanCount' },
    //         { label: 'Assigned Tele Caller', key: 'callerName' },
    //         { label: 'Assigned Credit Manager', key: 'credMgrName' },
    //         { label: 'Created At', key: 'createdAt' }
    //       ];
    //   });
    // }
  }

loadCustomerData(id: string): void {
  this.customeridService.getLeadById(id).subscribe(data => {
    this.customerData = data;
    console.log('Customer Data:', this.customerData);
this.customerName = data.customerName || ''; 
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


  toggleCustomer() {
    this.showCustomer = !this.showCustomer;
  }
  toggleaddress() {
   
  }
  toggleEmploymentDetails() {
   
  }
  addEmploymentDetails(){}
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
      
      // ✅ After successful update inside dialog, just re-fetch fresh customer data
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.customeridService.getLeadById(id).subscribe(data => {
          this.customerData = data;
          console.log('Refetched updated Customer Data:', this.customerData);
        });
      }
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
//name = 'g';

getInitials(name: string): string {
  if (!name) return '';
  return name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase();
}
customerId:string=this.route.snapshot.paramMap.get('id')!;
  //displayedColumns: string[] = ['type', 'address', 'city', 'state', 'pincode','houseType','status','customerId'];
  displayedColumns: string[] = ['type', 'address', 'city', 'state', 'pincode','houseType','status','delete'];

  addressList= new MatTableDataSource<any>();
  element:any[]=[this.addressList];

  addEmploymentList= new MatTableDataSource<any>();
  element1:any[]=[this.addEmploymentList];
 
  loadAddresses(customerId:string): void {
    const idd = this.route.snapshot.paramMap.get('id');
    this.dialogservice.getAllAddressesById(customerId).subscribe({
      next: data => {
        const formatted = Array.isArray(data) ? data : [data];
        this.element=formatted;
        this.addressList.data = formatted;
        console.log("Data:",data);
      },
      error: (err) => {
        console.error('Failed to load addresses:', err);
      }
    });
  }


deleteAddress(){
   console.log("deleteAddress clicked:");
}


 


  addAddress() {
    const dialogRef = this.dialog.open(AddAddressDialogComponentComponent, {
      width: '500px',
      data: { customerId: this.customerId } // 👈 Pass the dynamic customerId here
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
  
        // Attach the customerId to the result if not already attached
        if (!result.customerId) {
          result.customerId = this.customerId;
        }
  
        // Save the address to the server
        this.dialogservice.saveAddress(result).subscribe({
          next: (response) => {
            console.log("Response:", response);
            this.loadAddresses(this.customerId); // Reload addresses after saving
          },
          error: (err) => {
            console.error("Failed to save address:", err);
          }
        });
      }
    });
  }
  

leadid:string="xyz";

customer_Id: string = this.route.snapshot.paramMap.get('id')!;
 //customerId: string = 'CUST654321';
copyToClipboard(value: string) {
  navigator.clipboard.writeText(value).then(() => {
    console.log(`${value} copied to clipboard`);
    // Optional: Show a snackbar or toast here
  });
}
}
