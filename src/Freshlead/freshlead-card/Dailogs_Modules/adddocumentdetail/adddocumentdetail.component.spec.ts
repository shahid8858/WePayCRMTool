import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddocumentdetailComponent } from './adddocumentdetail.component';

describe('AdddocumentdetailComponent', () => {
  let component: AdddocumentdetailComponent;
  let fixture: ComponentFixture<AdddocumentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdddocumentdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdddocumentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
