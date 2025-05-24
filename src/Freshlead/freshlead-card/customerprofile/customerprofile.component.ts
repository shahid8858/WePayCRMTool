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
import { AddReferenceDetailsComponent } from '../Dailogs_Modules/add-reference-details/add-reference-details.component';
import { addemploymentdetailsComponent } from '../Dailogs_Modules/addemploymentdetail/addemploymentdetail.component';
import { AddassestdetailComponent } from '../Dailogs_Modules/addassestdetail/addassestdetail.component';
import { AddredflagsdetailComponent } from '../Dailogs_Modules/addredflagsdetail/addredflagsdetail.component';
import { AdddocumentdetailComponent } from '../Dailogs_Modules/adddocumentdetail/adddocumentdetail.component';
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
    this.loadrefrences(this.customerId);
    this.loademploymnetdetails(this.customerId)
     this.loadassestdetails(this.customerId);
      const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.loadCustomerData(id);
  }
  
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

  toggleRedFlagsDetails(){}

  
  
  onEditClick(event: Event) {
    event.stopPropagation(); // Prevent toggling the panel
    console.log("Edit clicked");
    // Your logic here
  }

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

editAddressDetails() {
  console.log('Edit Address Details clicked');
  // Add logic for editing address details
}
openPreScreenForm()
{}

toggleAssestDetails(){}




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
  displayedColumns: string[] = ['type', 'address', 'city', 'state', 'pincode','houseType','status','id'];

  addressList= new MatTableDataSource<any>();
  element:any[]=[this.addressList];
 

  refdisplayedColumns: string[] = ['fullname','relation','phonenumber','address','city','state','pincode','id'];
  refrenceList= new MatTableDataSource<any>();
  refelement:any[]=[this.refrenceList];


   emplomentdetailsColumns: string[] = ['companyname','currentcompanyexp','totalExp','address','city','state','pincode','status','verifiedby','id'];
  emplomentdetailsList= new MatTableDataSource<any>();
  emplomentdetailselement:any[]=[this.emplomentdetailsList];


  assestDetailsColumns:string[]=['asset_name','asset_value']
  assestDetailsList=new MatTableDataSource<any>();
  assestDetailsListelement:any[]=[this.assestDetailsList];


redFlagsDetailsColumns:string[]=['reason','risk_level']
 redFlagsDetailsList=new MatTableDataSource<any>();
 redFlagsDetailsListelement:any[]=[this.redFlagsDetailsList];


 DocumentDetailsColumns:string[]=['type','password','status']
 DocumentDetailsList=new MatTableDataSource<any>();
 DocumentDetailsListelement:any[]=[this.DocumentDetailsList];







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


    loadrefrences(customerId:string): void {
    const idd = this.route.snapshot.paramMap.get('id');
    this.dialogservice.getAllrefrenceById(customerId).subscribe({
      next: data => {
        const formatted = Array.isArray(data) ? data : [data];
        this.refelement=formatted;
        this.refrenceList.data = formatted;
        console.log("Data:",data);
      },
      error: (err) => {
        console.error('Failed to load addresses:', err);
      }
    });
  }

  loademploymnetdetails(customerId:string): void {
    const idd = this.route.snapshot.paramMap.get('id');
    this.dialogservice.getAllemploymentId(customerId).subscribe({
      next: data => {
        const formatted = Array.isArray(data) ? data : [data];
        this.emplomentdetailselement=formatted;
       
        this.emplomentdetailsList.data = data;
        console.log("Data:",data);
      },
      error: (err) => {
        console.error('Failed to load addresses:', err);
      }
    });
  }
  loadassestdetails(customerId:string): void {
    const idd = this.route.snapshot.paramMap.get('id');
    this.dialogservice.getAassestdetailsbyId(customerId).subscribe({
      next: data => {
        const formatted = Array.isArray(data) ? data : [data];
        this.assestDetailsListelement=formatted;
       
        this.assestDetailsList.data = data;
        console.log("Data:",data);
      },
      error: (err) => {
        console.error('Failed to load addresses:', err);
      }
    });
  }

  

    loadRedFlagsDetails(customerId:string): void {
    const idd = this.route.snapshot.paramMap.get('id');
    this.dialogservice.GetCustomerRedflagDetailsByID(customerId).subscribe({
      next: data => {
        const formatted = Array.isArray(data) ? data : [data];
        this.redFlagsDetailsListelement=formatted;
       
        this.redFlagsDetailsList.data = data;
        console.log("Data:",data);
      },
      error: (err) => {
        console.error('Failed to load addresses:', err);
      }
    });
  }
  deleteAddress(addressId: number): void {
  this.dialogservice.removeContact(addressId).subscribe({
    next: (res) => {
      console.log('Contact removed successfully:', res);
      // Optionally refresh address list
      this.loadAddresses(this.customerId); // implement this to reload data
    },
    error: (err) => {
      console.error('Failed to remove contact:', err);
    }
  });
}

  deleteRefrence(addressId: number): void {
  this.dialogservice.removeRefrence(addressId).subscribe({
    next: (res) => {
      console.log('Contact removed successfully:', res);
      // Optionally refresh address list
      this.loadrefrences(this.customerId); // implement this to reload data
    },
    error: (err) => {
      console.error('Failed to remove contact:', err);
    }
  });
}

 deleteemployment(addressId: number): void {
  this.dialogservice.removeemploymentdetails(addressId).subscribe({
    next: (res) => {
      console.log('Contact removed successfully:', res);
      // Optionally refresh address list
      this.loademploymnetdetails(this.customerId); // implement this to reload data
    },
    error: (err) => {
      console.error('Failed to remove contact:', err);
    }
  });
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

  addRefrence()
  {
    const dialogRef = this.dialog.open(AddReferenceDetailsComponent, {
      width: '50vw', 
  maxWidth: 'none',
      data: { customerId: this.customerId } // 👈 Pass the dynamic customerId here
    });
      
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
  
        // Attach the customerId to the result if not already attached
        if (!result.customerId) {
          result.customerId = this.customerId;
        }
        
        // Save the refrence to the server
        this.dialogservice.saverefrence(result).subscribe({
          next: (response) => {
            
            console.log("Response:", response);
            this.loadrefrences(this.customerId); // Reload addresses after saving
          },
          error: (err) => {
           
            console.error("Failed to save address:", err);
          }
        });
      }
    });
  }

  addEmploymentDetails(){
     const dialogRef = this.dialog.open(addemploymentdetailsComponent, {
      width: '50vw', 
  maxWidth: 'none',
      data: { customerId: this.customerId } // 👈 Pass the dynamic customerId here
    });
      
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
  
        // Attach the customerId to the result if not already attached
        if (!result.customerId) {
          result.customerId = this.customerId;
        }
       
        // Save the refrence to the server
        this.dialogservice.saveemploydetails(result).subscribe({
          next: (response) => {
         
            console.log("Response:", response);
            this.loademploymnetdetails(this.customerId); // Reload addresses after saving
          },
          error: (err) => {
            alert("err : "+err);
            console.error("Failed to save address:", err);
          }
        });
      }
    });
  }

  addAssestDetails(){ const dialogRef = this.dialog.open(AddassestdetailComponent, {
      width: '50vw', 
  maxWidth: 'none',
      data: { customerId: this.customerId } // 👈 Pass the dynamic customerId here
    });
      
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
  
        // Attach the customerId to the result if not already attached
        if (!result.customerId) {
          result.customerId = this.customerId;
        }
        
        // Save the refrence to the server
        this.dialogservice.saveassestdetails(result).subscribe({
          next: (response) => {
           
            console.log("Response:", response);
            this.loadassestdetails(this.customerId); // Reload addresses after saving
          },
          error: (err) => {
           
            console.error("Failed to save address:", err);
          }
        });
      }
    });}



    addKYCDetails(){}


    


    addRedFlagsDetails(){ const dialogRef = this.dialog.open(AddredflagsdetailComponent, {
      width: '50vw', 
  maxWidth: 'none',
      data: { customerId: this.customerId } // 👈 Pass the dynamic customerId here
    });
      
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
  
        // Attach the customerId to the result if not already attached
        if (!result.customerId) {
          result.customerId = this.customerId;
        }
         alert(result.fullname);
        // Save the refrence to the server
        this.dialogservice.saveredflagdetails(result).subscribe({
          next: (response) => {
            alert(response);
            console.log("Response:", response);
            this.loadRedFlagsDetails(this.customerId); // Reload addresses after saving
          },
          error: (err) => {
            alert("err : "+err);
            console.error("Failed to save address:", err);
          }
        });
      }
    });}


addDocumentDetails(){ const dialogRef = this.dialog.open(AdddocumentdetailComponent, {
      width: '50vw', 
  maxWidth: 'none',
      data: { customerId: this.customerId } // 👈 Pass the dynamic customerId here
    });
      
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
  
        // Attach the customerId to the result if not already attached
        if (!result.customerId) {
          result.customerId = this.customerId;
        }
         alert(result.fullname);
        // Save the refrence to the server
        this.dialogservice.saveemploydetails(result).subscribe({
          next: (response) => {
            alert(response);
            console.log("Response:", response);
            this.loadAddresses(this.customerId); // Reload addresses after saving
          },
          error: (err) => {
            alert("err : "+err);
            console.error("Failed to save address:", err);
          }
        });
      }
    });}

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
