import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshleadComponent } from './freshlead.component';

describe('FreshleadComponent', () => {
  let component: FreshleadComponent;
  let fixture: ComponentFixture<FreshleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreshleadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreshleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
