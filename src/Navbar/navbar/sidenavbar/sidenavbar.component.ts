import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';  // ✅ Import NgIf
import { CommonModule } from '@angular/common';
import { FreshleadComponent } from '../../../Freshlead/freshlead-card/freshlead/freshlead.component';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule ,RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [MatSidenav,FormsModule,MatFormFieldModule,CommonModule,MatInputModule,MatToolbar,MatSidenavContainer,MatNavList,MatSidenavContent,MatIconModule,MatSidenavModule,MatToolbarModule,MatListModule
    ,MatButtonModule,MatExpansionModule,MatSelectModule,RouterModule,
  ],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})
export class SidenavbarComponent {
  filterText: string = '';
  searchText: string = '';
  selectedLanguage: string = 'en'; // Default language

  // Add logic to handle language change, e.g., changing the app's language
  onLanguageChange(language: string) {
    // Implement your logic for language change
    console.log('Selected language:', language);
  }
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


  isSidenavOpen = false;
  iisSidenavOpen = false;
  isSidenavicon: boolean = false; // Initially, the sidenav is closed
 

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}

