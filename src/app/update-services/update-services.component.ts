import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleServices } from '../interfaces/VehicleService';
import { VehicleServiceService } from '../services/vehicle-service.service';

@Component({
  selector: 'app-update-services',
  templateUrl: './update-services.component.html',
  styleUrls: ['./update-services.component.css']
})
export class UpdateServicesComponent implements OnInit {

 
  id!:String

  service:VehicleServices = new VehicleServices();

  constructor(private services:VehicleServiceService,private route:ActivatedRoute,private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit(): void {


    this.id = this.route.snapshot.params['id'];

    this.services.getServiceByID(this.id).subscribe(data=>{

      this.service = data;
    
      console.log(this.service)
    })
  }


  onSubmit(){

    this.services.updateServices(this.id,this.service).subscribe(data=>{

      if(this.service.serviceName == ""){
        this.ErrorSnack();
      }
      else if(this.service.kilometerFrequency! <= 0 || this.service.timeFrequency! <= 0){
        this.ErrorSnack1();
      }
      else{
        this.goToVehicleServices();
        this.openSnackBar();
      }
      
    
    })
  }


  goToVehicleServices(){

    this.router.navigate(['/services'])
  }

  openSnackBar(){
  
    this.snackBar.open("Edited successfully", "Dismiss");
  
  }
  ErrorSnack(){
  
  this.snackBar.open("Please fill the form!","Dismiss")
  }
  ErrorSnack1(){
  
    this.snackBar.open("Neggative numbers arent allowed!","Dismiss")
    }
}
