import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyConfiguration } from '../interfaces/CompanyConfig';
import { VehicleConfiguration } from '../interfaces/VehicleConfig';
import { VehicleServices } from '../interfaces/VehicleService';
import { ComapnyConfigService } from '../services/comapny-config.service';
import { VehicleConfigService } from '../services/vehicle-config.service';
import { VehicleServiceService } from '../services/vehicle-service.service';

@Component({
  selector: 'app-update-vehicleconfig',
  templateUrl: './update-vehicleconfig.component.html',
  styleUrls: ['./update-vehicleconfig.component.css']
})
export class UpdateVehicleconfigComponent implements OnInit {


  service?:VehicleServices[]
  company?:CompanyConfiguration[]
  

  id!:String
  vehicle:VehicleConfiguration = new VehicleConfiguration();
  constructor(private vehicleconServ:VehicleConfigService,private route:ActivatedRoute,
    private companyService:ComapnyConfigService,private vehicleServ:VehicleServiceService
    ,private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit(): void {

    this.getCompanies();
    this.getService();


    this.id = this.route.snapshot.params['id'];
    
    this.vehicleconServ.getVehicleById(this.id).subscribe(data=>{
      this.vehicle = data;
    })
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




  onSubmit(){

    this.vehicleconServ.updateVehicles(this.id, this.vehicle).subscribe(data=>{

      if(this.vehicle.vehicleName == ""){
        this.ErrorSnack();
      }
      else if(this.vehicle.consumption! <= 0 || this.vehicle.vehicleEngine! <= 0){
       this.ErrorSnack1();
      }else{
        this.gotoVehicle();
        this.openSnackBar();
      }

     
    })

  }

  gotoVehicle(){

    this.router.navigate(['/vehicles']);
  }
  openSnackBar(){
  
    this.snackBar.open("Edited successfully", "Dismiss");
  
  }
  ErrorSnack(){
  
  this.snackBar.open("Please fill the form!","Dismiss")
  }
  ErrorSnack1(){
  
    this.snackBar.open("Negative numbers arent allowed!","Dismiss")
    }
  
    compareObjects(o1: any, o2: any): boolean {
      return  o1.id === o2.id;
    }
}
