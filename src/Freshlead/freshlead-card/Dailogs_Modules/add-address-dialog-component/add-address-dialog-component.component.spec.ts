import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressDialogComponentComponent } from './add-address-dialog-component.component';

describe('AddAddressDialogComponentComponent', () => {
  let component: AddAddressDialogComponentComponent;
  let fixture: ComponentFixture<AddAddressDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAddressDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAddressDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
