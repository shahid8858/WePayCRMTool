import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReferenceDetailsComponent } from './add-reference-details.component';

describe('AddReferenceDetailsComponent', () => {
  let component: AddReferenceDetailsComponent;
  let fixture: ComponentFixture<AddReferenceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReferenceDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddReferenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
