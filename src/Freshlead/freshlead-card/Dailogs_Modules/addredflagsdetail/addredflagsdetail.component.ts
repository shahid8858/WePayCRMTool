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
  selector: 'app-addredflagsdetail',
  standalone: true,
    imports: [
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './addredflagsdetail.component.html',
  styleUrl: './addredflagsdetail.component.css'
})
export class AddredflagsdetailComponent implements OnInit {

  redflagsForm: FormGroup;
  customerId: string = '';


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogref: MatDialogRef<AddredflagsdetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.redflagsForm = this.fb.group({
      reason: [''],
      risklevel: [''],
     
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = params.get('id') || '';
    });

    if (this.data) {
      this.redflagsForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.redflagsForm.valid) {
      const formData = {
        ...this.redflagsForm.value,
        customerId: this.data?.customerId || this.customerId
      };
      this.dialogref.close(formData);
    }
  }
}
