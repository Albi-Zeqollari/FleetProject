import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VehicleServices } from '../interfaces/VehicleService';
import { VehicleServiceService } from '../services/vehicle-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-vehicleservice',
  templateUrl: './create-vehicleservice.component.html',
  styleUrls: ['./create-vehicleservice.component.css']
})
export class CreateVehicleserviceComponent implements OnInit {


 
  createVService:VehicleServices=new VehicleServices()

  constructor(private vehicleS:VehicleServiceService,private router:Router,private toastr: ToastrService,private snackBar:MatSnackBar) { }


  ngOnInit(): void {
  }

  saveVehicleService(){

    this.vehicleS.createVehicleService(this.createVService).subscribe(data=>{

      this.goToVehicleServices();

      
    })
   
  }

  goToVehicleServices(){

    this.router.navigate(['/services'])
  }
  

  onSubmit(){

 
   

    if(this.createVService.serviceName == null  ){

      this.ErrorSnack();
      
    }
    else if( this.createVService.kilometerFrequency! <= 0 || this.createVService.timeFrequency! <= 0){
      this.ErrorSnack1();

    }
    else{     
      
      this.saveVehicleService();
      this.openSnackBar();

    }

    
    
  }


// showSuccess() {

//   this.toastr.success('Succesfully updated');
// }
// showError() {

//   this.toastr.error('Something went wrong');
// }

openSnackBar(){
  
  this.snackBar.open("Added successfully", "Dismiss");

}
ErrorSnack(){

this.snackBar.open("Please fill the form!","Dismiss")
}

ErrorSnack1(){

  this.snackBar.open("Negative numbers arent allowed","Dismiss")
  }

}
