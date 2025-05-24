import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddredflagsdetailComponent } from './addredflagsdetail.component';

describe('AddredflagsdetailComponent', () => {
  let component: AddredflagsdetailComponent;
  let fixture: ComponentFixture<AddredflagsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddredflagsdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddredflagsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
