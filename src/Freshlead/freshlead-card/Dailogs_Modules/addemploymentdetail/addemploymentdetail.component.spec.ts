import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemploymentdetailComponent } from './addemploymentdetail.component';

describe('AddemploymentdetailComponent', () => {
  let component: AddemploymentdetailComponent;
  let fixture: ComponentFixture<AddemploymentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddemploymentdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddemploymentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
