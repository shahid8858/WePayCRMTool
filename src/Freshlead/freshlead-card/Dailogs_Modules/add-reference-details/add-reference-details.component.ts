import { Component ,Inject} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms'; 
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';  // Make sure to import MAT_DIALOG_DATA
import { ActivatedRoute } from '@angular/router';
import { STATES,states,callingStatus,CALLING_STATUS_OPTIONS,relations,RelationType } from '../../Shared/CommanData';

@Component({
  selector: 'app-add-reference-details',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatSelectModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './add-reference-details.component.html',
  styleUrl: './add-reference-details.component.css'
})
export class AddReferenceDetailsComponent {

    refrenceForm: FormGroup;
    customerId: string = '';

   constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private dialogref: MatDialogRef<AddReferenceDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
   )
   {
      
this.route.paramMap.subscribe(params => {
      this.customerId = params.get('id') || '';
    });

     this.refrenceForm = this.fb.group({
      relation: [this.data?.relation||''],
      fullname:[''],
      phonenumber:[''],
      address: [''],
      state: [this.data?.state || ''],  // Initialize state with the passed data
      city: [''],
      pincode: [''],
    });
   }
    states: states[] = STATES;
    leadstatus :callingStatus[]=CALLING_STATUS_OPTIONS;
    relations :relations[]=RelationType;

   form = new FormGroup({
    state: new FormControl<string | null>(null),
    status :new FormControl<string | null>(null),
    relation :new FormControl<string | null>(null)
  });

onSubmit()
{
  if (this.refrenceForm.valid) {
      const formData = {
        ...this.refrenceForm.value,
        customerId: this.data?.customerId , // Use dynamic customerId if available
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
  get selectedrelation() {
    return this.relations.find(s => s.id.toString() === this.form.value.relation);
  }

}
