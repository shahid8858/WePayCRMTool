
import { Routes } from '@angular/router';
import { FreshleadComponent } from '../Freshlead/freshlead-card/freshlead/freshlead.component';
import { SidenavbarComponent } from '../Navbar/navbar/sidenavbar/sidenavbar.component';
import { OtpComponent } from '../LoginModule/login/otp/otp.component';
import { CustomerprofileComponent } from '../Freshlead/freshlead-card/customerprofile/customerprofile.component';

export const routes: Routes = [
  { path: '', component: OtpComponent },  // login page

  {
    path: 'app',
    component: SidenavbarComponent,
    children: [
      { path: 'freshlead', component: FreshleadComponent },
      { path: 'customerprofile/:id', component: CustomerprofileComponent }
    ]
  },

  // { path: '**', redirectTo: '' }
];
