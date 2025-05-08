import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../app/service/auth.service';
import { Router ,RouterOutlet,RouterLink} from '@angular/router';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
  
})
export class OtpComponent {
showSidenav=false;
  otpForm: FormGroup;
  otpSent = signal<boolean>(false);
  otpMessage = signal<string>('');
  errorMessage = signal<string>('');

  constructor(private fb: FormBuilder,
    private otpService: AuthService,
    private router: Router)
    {
      this.otpForm = this.fb.group({
        mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        otp: [''],
      });
    }
    get greetingMessage(): string {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good Morning';
      if (hour < 18) return 'Good Afternoon';
      return 'Good Evening';
    }
    sendOtp(): void {
      // const otp = this.otpService.generateOtp();
      // const mobilenumbey=this.otpForm.get('mobile')?.value;
      // alert(otp);
      // this.otpService.sendOtpToServer(otp).subscribe({
      //   next: () => {
      //     this.otpSent.set(true);
          
      //     this.otpMessage.set(`OTP sent successfully on: ${mobilenumbey}`);
      //   },
      //   error: () => {
         
      //     this.errorMessage.set('Failed to send OTP. Try again.');
          
      //   },
      // });
      
    }
  
    // Validate OTP
    // verifyOtp(): void {
    //   const { otp } = this.otpForm.value;
    //   if (this.otpService.validateOtp(otp)) {
    //     this.router.navigate(['/dashboard']);
    //   } else {
    //     this.errorMessage.set('Invalid OTP. Please try again.');
    //   }
      
    goToNextPage() {
      this.router.navigate(['/freshlead']); // Replace with your route
    }

      verifyOtp(): void {
        const { otp } = this.otpForm.value;
        if (this.otpService.validateOtp(otp)) {
          this.showSidenav = true; // ✅ Show the sidenav
          // Optional: delay routing or comment it out if you want to stay on the page
          // this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage.set('Invalid OTP. Please try again.');
          
        }

    }
}
