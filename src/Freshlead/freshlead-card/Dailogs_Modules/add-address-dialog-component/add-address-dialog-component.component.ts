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
  ) {
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

  states = [
    { id: '1', name: 'Andhra Pradesh' },
    { id: '2', name: 'Arunachal Pradesh' },
    { id: '3', name: 'Assam' },
    { id: '4', name: 'Bihar' },
    { id: '5', name: 'Chandigarh' },
    { id: '6', name: 'Chhattisgarh' },
    { id: '7', name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { id: '8', name: 'Delhi' },
    { id: '9', name: 'Goa' },
    { id: '10', name: 'Gujarat' },
    { id: '11', name: 'Haryana' },
    { id: '12', name: 'Himachal Pradesh' },
    { id: '13', name: 'Jammu and Kashmir' },
    { id: '14', name: 'Jharkhand' },
    { id: '15', name: 'Karnataka' },
    { id: '16', name: 'Kerala' },
    { id: '17', name: 'Ladakh' },
    { id: '18', name: 'Lakshadweep' },
    { id: '19', name: 'Madhya Pradesh' },
    { id: '20', name: 'Maharashtra' },
    { id: '21', name: 'Manipur' },
    { id: '22', name: 'Meghalaya' },
    { id: '23', name: 'Mizoram' },
    { id: '24', name: 'Nagaland' },
    { id: '25', name: 'Odisha' },
    { id: '26', name: 'Puducherry' },
    { id: '27', name: 'Punjab' },
    { id: '28', name: 'Rajasthan' },
    { id: '29', name: 'Sikkim' },
    { id: '30', name: 'Tamil Nadu' },
    { id: '31', name: 'Telangana' },
    { id: '32', name: 'Tripura' },
    { id: '33', name: 'Uttar Pradesh' },
    { id: '34', name: 'Uttarakhand' },
    { id: '35', name: 'West Bengal' }
  ];

  form = new FormGroup({
    state: new FormControl<string | null>(null),
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
}
