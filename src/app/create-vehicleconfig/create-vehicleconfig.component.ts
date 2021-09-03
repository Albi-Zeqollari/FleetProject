import { Component, ElementRef, OnInit } from '@angular/core';
import { VehicleConfiguration } from '../interfaces/VehicleConfig';
import { ComapnyConfigService } from '../services/comapny-config.service';
import { CompanyConfiguration } from '../interfaces/CompanyConfig';
import { VehicleServices } from '../interfaces/VehicleService';
import { VehicleServiceService } from '../services/vehicle-service.service';
import { Router } from '@angular/router';
import { VehicleConfigService } from '../services/vehicle-config.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-create-vehicleconfig',
  templateUrl: './create-vehicleconfig.component.html',
  styleUrls: ['./create-vehicleconfig.component.css']
})
export class CreateVehicleconfigComponent implements OnInit {

  creatVehicle:VehicleConfiguration=new VehicleConfiguration();

  
  service?:VehicleServices[]
  company?:CompanyConfiguration[]
  vehicles?:VehicleConfiguration[]


  constructor(private router:Router,private companyService:ComapnyConfigService,
    private vehicleServ:VehicleServiceService,private vehicle:VehicleConfigService,private snackBar:MatSnackBar,
   ) { }


  ngOnInit(): void {

    this.getCompanies();
    this.getService();
    this.getVehicles();


    
  }


  saveVehicle(){

    this.vehicle.createVehicle(this.creatVehicle).subscribe(data=>{

      
      this.gotoVehicle();

    })
  }

  gotoVehicle(){

    this.router.navigate(['/vehicles']);
   
  }



  onSubmit(){

    if(this.creatVehicle.vehicleName == null){

      this.ErrorSnack();
    }
    else if(this.creatVehicle.vehicleEngine! <= 0 || this.creatVehicle.consumption! <= 0){

      this.ErrorSnack1();
    }

    else{
      this.saveVehicle();
      this.openSnackBar();
    }
 


  }
  getCompanies(){

    this.companyService.getCompany().subscribe(data=>{

      this.company = data;
    })

  }

  getService(){
    this.vehicleServ.getService().subscribe(data=>{

      this.service= data;
    })
  }

  getVehicles(){
    this.vehicle.getVehicle().subscribe(data=>{

      this.vehicles = data;
      console.log(this.creatVehicle)
    })
  }

  openSnackBar(){
  
    this.snackBar.open("Added successfully", "Dismiss");
  
  }
  ErrorSnack(){
  
  this.snackBar.open("Please fill the form!","Dismiss")
  }
  ErrorSnack1(){
  
    this.snackBar.open("Negative numbers arent allowed!","Dismiss")
    }
  

}
