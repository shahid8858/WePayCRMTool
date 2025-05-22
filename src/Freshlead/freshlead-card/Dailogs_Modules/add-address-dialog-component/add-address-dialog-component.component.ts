import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms'; 
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';  // Make sure to import MAT_DIALOG_DATA
import { ActivatedRoute } from '@angular/router';
import { STATES,states,callingStatus,CALLING_STATUS_OPTIONS } from '../../Shared/CommanData';
@Component({
  selector: 'app-add-address-dialog',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatSelectModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './add-address-dialog-component.component.html',
  styleUrls: ['./add-address-dialog-component.component.css']   // ✅ Corrected styleUrl -> styleUrls
})
export class AddAddressDialogComponentComponent {

  addressForm: FormGroup;
  customerId: string = '';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogref: MatDialogRef<AddAddressDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Inject dialog data
  ) 
  {
    this.route.paramMap.subscribe(params => {
      this.customerId = params.get('id') || '';
    });


    this.addressForm = this.fb.group({
      type: [''],
      address: [''],
      state: [this.data?.state || ''],  // Initialize state with the passed data
      city: [''],
      pincode: [''],
      houseType: [''],
      status: ['']
    });
  }


   states: states[] = STATES;
   leadstatus :callingStatus[]=CALLING_STATUS_OPTIONS;

  form = new FormGroup({
    state: new FormControl<string | null>(null),
    status :new FormControl<string | null>(null)
  });

  onSubmit(): void {
    if (this.addressForm.valid) {
      const formData = {
        ...this.addressForm.value,
        customerId: this.data?.customerId || "26BD6125-0BC2-40C1-9D6B-6F36ADFD0F49", // Use dynamic customerId if available
      };
      this.dialogref.close(formData);
    }
  }

  get selectedState() {
    return this.states.find(s => s.id.toString() === this.form.value.state);
  }

    get selectedStatus() {
    return this.leadstatus.find(s => s.id.toString() === this.form.value.status);
  }
}
