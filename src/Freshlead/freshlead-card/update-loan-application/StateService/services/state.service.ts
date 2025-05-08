import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private states = [
    { id: 1, name: 'Andhra Pradesh' },
    { id: 2, name: 'Arunachal Pradesh' },
    { id: 3, name: 'Assam' },
    { id: 4, name: 'Bihar' },
    { id: 5, name: 'Chandigarh' },
    { id: 6, name: 'Chhattisgarh' },
    { id: 7, name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { id: 8, name: 'Delhi' },
    { id: 9, name: 'Goa' },
    { id: 10, name: 'Gujarat' },
    { id: 11, name: 'Haryana' },
    { id: 12, name: 'Himachal Pradesh' },
    { id: 13, name: 'Jammu and Kashmir' },
    { id: 14, name: 'Jharkhand' },
    { id: 15, name: 'Karnataka' },
    { id: 16, name: 'Kerala' },
    { id: 17, name: 'Ladakh' },
    { id: 18, name: 'Lakshadweep' },
    { id: 19, name: 'Madhya Pradesh' },
    { id: 20, name: 'Maharashtra' },
    { id: 21, name: 'Manipur' },
    { id: 22, name: 'Meghalaya' },
    { id: 23, name: 'Mizoram' },
    { id: 24, name: 'Nagaland' },
    { id: 25, name: 'Odisha' },
    { id: 26, name: 'Puducherry' },
    { id: 27, name: 'Punjab' },
    { id: 28, name: 'Rajasthan' },
    { id: 29, name: 'Sikkim' },
    { id: 30, name: 'Tamil Nadu' },
    { id: 31, name: 'Telangana' },
    { id: 32, name: 'Tripura' },
    { id: 33, name: 'Uttar Pradesh' },
    { id: 34, name: 'Uttarakhand' },
    { id: 35, name: 'West Bengal' }
  ];

  constructor() {}

  getStates() {
    return this.states;
  }
}
