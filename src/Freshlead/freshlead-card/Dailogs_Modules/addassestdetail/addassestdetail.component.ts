

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

@Component({
  selector: 'app-addassestdetail',
  standalone: true,
   imports: [
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './addassestdetail.component.html',
  styleUrl: './addassestdetail.component.css'
})
export class AddassestdetailComponent implements OnInit {

  assestForm: FormGroup;
  customerId: string = '';


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogref: MatDialogRef<AddassestdetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.assestForm = this.fb.group({
      asset_name: [''],
      asset_value: [''],
     
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = params.get('id') || '';
    });

    if (this.data) {
      this.assestForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.assestForm.valid) {
      const formData = {
        ...this.assestForm.value,
        customerId: this.data?.customerId || this.customerId
      };
      this.dialogref.close(formData);
    }
  }

  
}
