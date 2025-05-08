import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FreshleadComponent } from '../../../Freshlead/freshlead-card/freshlead/freshlead.component';

import { NgClass } from '@angular/common';
import { CustomerprofileComponent } from "../../../Freshlead/freshlead-card/customerprofile/customerprofile.component"; // ✅ Import this
@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [
    MatSidenavModule, // 👈 required for mat-sidenav
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    
    
],
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent {
  isSidenavOpen = true;
  iisSidenavOpen=true;
  searchText: string = '';
  isSidenavicon: boolean = false; // Initially, the sidenav is closed
  
logout() {
  // Example logout logic
  console.log("Logging out...");
  // Navigate or clear session
}
onSearch() {
  console.log('Searching for:', this.searchText);
  // implement your search logic
}
profileImageUrl: string | ArrayBuffer | null = null;

onFileSelected(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
  filterText: string = ''; // ✅ This line fixes the error
  
}
describe('SidenavbarComponent', () => {
  let component: SidenavbarComponent;
  let fixture: ComponentFixture<SidenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavbarComponent, FormsModule], // ✅ Include FormsModule here
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});