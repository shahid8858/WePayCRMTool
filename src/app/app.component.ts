import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OtpComponent } from '../LoginModule/login/otp/otp.component';
import { FreshleadComponent } from "../Freshlead/freshlead-card/freshlead/freshlead.component";
import { MatIcon } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Importing CommonModule
import { MatNavList } from '@angular/material/list';

import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavContainer } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,MatNavList,HttpClientModule,MatIcon,MatSidenavContainer,MatSidenav,MatSidenavModule,MatIconModule,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent {
//   title = 'WePayCRMTool';
//   filterText: string = '';
  
// }

export class AppComponent {
  title = 'WePayCRMTool';
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
