import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { STATES, states, callingStatus, CALLING_STATUS_OPTIONS, relations, RelationType } from '../../Shared/CommanData';

@Component({
  selector: 'addemploymentdetail.component',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './addemploymentdetail.component.html',
  styleUrl: './addemploymentdetail.component.css'
})
export class addemploymentdetailsComponent implements OnInit {

  EmploymentForm: FormGroup;
  customerId: string = '';

  states: states[] = STATES;
  leadstatus: callingStatus[] = CALLING_STATUS_OPTIONS;
  relations: relations[] = RelationType;

form = new FormGroup({
    state: new FormControl<string | null>(null),
    status :new FormControl<string | null>(null),
    relation :new FormControl<string | null>(null)
  });


  experienceList = [
    { value: '0-6', label: '0 years 6 months' },
    { value: '1-0', label: '1 year' },
    { value: '1-6', label: '1 year 6 months' },
    { value: '2-0', label: '2 years' },
    { value: '3-0', label: '3 years' },
    { value: '4-0', label: '4 years' },
    { value: '5-0', label: '5 years' },
    { value: '5-6', label: '5 years 6 months' },
    { value: '10-0', label: '10 years' },
    { value: '15-0', label: '15 years' },
    { value: '20-0', label: '20 years' }
  ];

  currentexperience = [...this.experienceList];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogref: MatDialogRef<addemploymentdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.EmploymentForm = this.fb.group({
      companyname: [''],
      totalExp: [''],
      currentcompanyexp: [''],
      address: [''],
      city: [''],
      state: [''],
      pincode: [''],
      status: [''],
      verifiedby: [''],
      Actions: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = params.get('id') || '';
    });

    if (this.data) {
      this.EmploymentForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.EmploymentForm.valid) {
      const formData = {
        ...this.EmploymentForm.value,
        customerId: this.data?.customerId || this.customerId
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
