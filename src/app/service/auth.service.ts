import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl="http://localhost:3000/userss";
  private otpapiUrl = 'http://localhost:3000/otp';
  private otpValue: string = '';
  constructor(private http :HttpClient) { }

  login(Username: string , password : string) :Observable<any[]>
  {
       return this.http.get<any[]>(this.apiUrl)
  }

  settoken(token : string):void{
    localStorage.setItem('token',token)
  }

  gettoken():string | null{
    return localStorage.getItem('token');
  }

  logout():void {
    localStorage.removeItem('token');
  }

  generateOtp(): string {
    this.otpValue = Math.floor(100000 + Math.random() * 900000).toString();
    return this.otpValue;
  }

  // Simulate sending OTP to the server
  sendOtpToServer(otp: string): Observable<any> {
    return this.http.post(this.otpapiUrl, { otp });
  }

  // Validate OTP (local check here, but can be server-side)
  validateOtp(inputOtp: string): boolean {
    return inputOtp === this.otpValue;
  }

}
