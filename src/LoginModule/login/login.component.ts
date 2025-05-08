import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../app/service/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  errorMessage = signal<string>('');

  constructor(private fb: FormBuilder,public http: HttpClient,private router: Router,private authserv :AuthService) 
  {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

   
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // this.http.get<any[]>('http://localhost:3000/users')
      //   .subscribe({
      //     next: (users) => {
      //       const user = users.find(u => u.username === username && u.password === password);
      //       if (user) {
      //         localStorage.setItem('token', btoa(`${username}:${password}`));
      //         this.router.navigate(['/dashboard']);
      //       } else {
      //         this.errorMessage = 'Invalid username or password.';
      //       }
      //     },
      //     error: () => {
      //       this.errorMessage = 'Error connecting to the server.';
      //     }
      //   });

      this.authserv.login(username,password).subscribe({
        next : (users)=>
          {

          const userr =users.find((u)=>u.username==username && u.password==password);
          if(userr)
          {
            const token=btoa(`${username}:${password}`);
            this.authserv.settoken(token);
          }
          else{
            this.errorMessage.set('Invalid username or passwod');
          }
        },
        error:()=>{
          this.errorMessage.set('Error Connecting to the server');
        },
      });
    }
  }

}


