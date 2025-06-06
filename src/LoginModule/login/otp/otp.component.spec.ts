import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpComponent } from './otp.component';


describe('OtpComponent', () => {
  let component: OtpComponent;
  let fixture: ComponentFixture<OtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
