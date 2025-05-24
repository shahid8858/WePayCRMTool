
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { STATES, states, callingStatus, CALLING_STATUS_OPTIONS, relations, RelationType } from '../../Shared/CommanData';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-adddocumentdetail',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIcon
  ],
  templateUrl: './adddocumentdetail.component.html',
  styleUrl: './adddocumentdetail.component.css'
})
export class AdddocumentdetailComponent implements OnInit {

  documentForm: FormGroup;
  customerId: string = '';


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogref: MatDialogRef<AdddocumentdetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.documentForm = this.fb.group({
      type: [''],
      password: [''],
       status: [''],
        documentType: ['']
     
    });
  }

documentTypes = [
  { value: 'pan_card', label: 'PAN Card' },
  { value: 'aadhar_card', label: 'Aadhar Card' },
  { value: 'bank_statement', label: 'Bank Statement' },
  { value: 'voter_id', label: 'Voter ID' },
  { value: 'driving_license', label: 'Driving License' },
  { value: 'passport', label: 'Passport' },
  { value: 'selfie', label: 'Selfie' },
  { value: 'pay_slip', label: 'Pay Slip' },
  { value: 'id_card', label: 'ID Card' },
  { value: 'cheque', label: 'Cheque' },
  { value: 'electricity_bill', label: 'Electricity Bill' },
  { value: 'mobile_bill', label: 'Mobile Bill' },
  { value: 'video', label: 'Video' },
  { value: 'zip', label: 'ZIP' },
  { value: 'other', label: 'Other' },
];

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = params.get('id') || '';
    });

    if (this.data) {
      this.documentForm.patchValue(this.data);
    }
  }


isDragOver = false;

onFileDrop(event: DragEvent) {
  event.preventDefault();
  this.isDragOver = false;
  const file = event.dataTransfer?.files?.[0];
  if (file) {
    this.handleFile(file);
  }
}

onDragOver(event: DragEvent) {
  event.preventDefault();
  this.isDragOver = true;
}

onDragLeave(event: DragEvent) {
  this.isDragOver = false;
}

onFileSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    this.handleFile(file);
  }
}

handleFile(file: File) {
  console.log('Selected file:', file);
  // Store it or patch it to form control if needed
}






  onSubmit() {
    if (this.documentForm.valid) {
      const formData = {
        ...this.documentForm.value,
        customerId: this.data?.customerId || this.customerId
      };
      this.dialogref.close(formData);
    }
  }
}
