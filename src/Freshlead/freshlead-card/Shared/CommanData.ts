export interface states{
    id:string;
    name:string;
}

export interface callingStatus{
    id:string;
    label:string;
}

export const STATES: states[] = [
    { id: '1', name: 'Andhra Pradesh' },
    { id: '2', name: 'Arunachal Pradesh' },
    { id: '3', name: 'Assam' },
    { id: '4', name: 'Bihar' },
    { id: '5', name: 'Chandigarh' },
    { id: '6', name: 'Chhattisgarh' },
    { id: '7', name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { id: '8', name: 'Delhi' },
    { id: '9', name: 'Goa' },
    { id: '10', name: 'Gujarat' },
    { id: '11', name: 'Haryana' },
    { id: '12', name: 'Himachal Pradesh' },
    { id: '13', name: 'Jammu and Kashmir' },
    { id: '14', name: 'Jharkhand' },
    { id: '15', name: 'Karnataka' },
    { id: '16', name: 'Kerala' },
    { id: '17', name: 'Ladakh' },
    { id: '18', name: 'Lakshadweep' },
    { id: '19', name: 'Madhya Pradesh' },
    { id: '20', name: 'Maharashtra' },
    { id: '21', name: 'Manipur' },
    { id: '22', name: 'Meghalaya' },
    { id: '23', name: 'Mizoram' },
    { id: '24', name: 'Nagaland' },
    { id: '25', name: 'Odisha' },
    { id: '26', name: 'Puducherry' },
    { id: '27', name: 'Punjab' },
    { id: '28', name: 'Rajasthan' },
    { id: '29', name: 'Sikkim' },
    { id: '30', name: 'Tamil Nadu' },
    { id: '31', name: 'Telangana' },
    { id: '32', name: 'Tripura' },
    { id: '33', name: 'Uttar Pradesh' },
    { id: '34', name: 'Uttarakhand' },
    { id: '35', name: 'West Bengal' }
]

export const CALLING_STATUS_OPTIONS:callingStatus[] = [
    { id: '1', label: 'Fresh Lead' },
    { id: '2', label: 'Interested' },
    { id: '3', label: 'Callback' },
    { id: '4', label: 'Documents Received' },
    { id: '5', label: 'Incomplete Documents' },
    { id: '6', label: 'Wrong Number' },
    { id: '7', label: 'Not Interested' },
    { id: '8', label: 'No Answer' },
    { id: '9', label: 'Not Eligible' },
    { id: '10', label: 'Duplicate' },
    { id: '11', label: 'DNC' },
    { id: '12', label: 'Less Salary' },
    { id: '13', label: 'Out of Range' },
    { id: '14', label: 'Rejected' },
    { id: '15', label: 'Approved' },
    { id: '16', label: 'Pre-Close' },
    { id: '17', label: 'Closed' },
    { id: '18', label: 'Part Payment' },
    { id: '19', label: 'Settlement' },
    { id: '20', label: 'Disbursed' },
    { id: '21', label: 'Bank Update' },
    { id: '22', label: 'Other' }
  ];