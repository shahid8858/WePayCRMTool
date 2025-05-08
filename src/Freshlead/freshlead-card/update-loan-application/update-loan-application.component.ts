import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; 
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StateService } from './StateService/services/state.service';  // Import the StateService
import { State } from '../../../app/models/lead.model';

@Component({
  selector: 'app-update-loan-application',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './update-loan-application.component.html',
  styleUrl: './update-loan-application.component.css'
})
export class UpdateLoanApplicationComponent implements OnInit {

  loanupdate: FormGroup;
  isSubmitting: boolean = false;
  states: State[] = [];  // Declare the states array to hold the fetched states

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialogRef<UpdateLoanApplicationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private stateService: StateService  // Inject the StateService here
  ) {
    this.loanupdate = this.fb.nonNullable.group({
      purpose: [''],
      monthlyIncome: [''],
      loanRequired: [''],
      state: [''],
      city: [''],
      pinCode: ['']
    });
  }

  ngOnInit() {
    if (this.data && this.data.customer) {
      this.loanupdate.patchValue({
        purpose: this.data.customer.purpose || '',
        monthlyIncome: this.data.customer.monthlyIncome || '',
        loanRequired: this.data.customer.loanRequired || '',
        state: this.data.customer.state || '',
        city: this.data.customer.city || '',
        pinCode: this.data.customer.pinCode || ''
      });
    }

    // Fetch states from the StateService
    this.states = this.stateService.getStates();
  }

  onSubmit() {
    if (this.loanupdate.valid) {
      let payload = { ...this.loanupdate.value };
      
      // Make sure pinCode is string
      payload.pinCode = String(payload.pinCode);

      // Remove ₹ symbol if accidentally entered
      payload.monthlyIncome = payload.monthlyIncome.replace(/₹/g, '').trim();
      payload.loanRequired = payload.loanRequired.replace(/₹/g, '').trim();

      const customerId = this.data.customer.customerId;  // getting the correct CustomerID

      // ✅ Correct API URL
      const apiUrl = `http://localhost:82/api/Leads/UpdateLoanRequest?CustomerID=${encodeURIComponent(customerId)}`;

      this.isSubmitting = true;

      this.http.post(apiUrl, payload)
        .subscribe({
          next: (response) => {
            this.isSubmitting = false;
            this.dialogRef.close(response); // Close and send response back
          },
          error: (error) => {
            this.isSubmitting = false;
          }
          
        });
        
    }
  }
}
