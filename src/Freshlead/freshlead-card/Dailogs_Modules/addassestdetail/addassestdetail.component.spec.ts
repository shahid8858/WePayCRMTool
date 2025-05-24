import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassestdetailComponent } from './addassestdetail.component';

describe('AddassestdetailComponent', () => {
  let component: AddassestdetailComponent;
  let fixture: ComponentFixture<AddassestdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddassestdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddassestdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
