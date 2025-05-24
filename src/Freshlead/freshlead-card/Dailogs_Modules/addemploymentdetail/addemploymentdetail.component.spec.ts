import { ComponentFixture, TestBed } from '@angular/core/testing';
import { addemploymentdetailsComponent } from './addemploymentdetail.component';

describe('AddemploymentdetailComponent', () => {
  let component: addemploymentdetailsComponent;
  let fixture: ComponentFixture<addemploymentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [addemploymentdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(addemploymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
