import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyConfiguration } from '../interfaces/CompanyConfig';
import { Fleet } from '../interfaces/Fleet';
import { VehicleConfiguration } from '../interfaces/VehicleConfig';
import { VehicleServices } from '../interfaces/VehicleService';
import { ComapnyConfigService } from '../services/comapny-config.service';
import { FleetConfigService } from '../services/fleet-config.service';
import { VehicleConfigService } from '../services/vehicle-config.service';
import { VehicleServiceService } from '../services/vehicle-service.service';

@Component({
  selector: 'app-update-fleet',
  templateUrl: './update-fleet.component.html',
  styleUrls: ['./update-fleet.component.css']
})
export class UpdateFleetComponent implements OnInit {

  service?:VehicleServices[]
  company?:CompanyConfiguration[]
  vehicles?:VehicleConfiguration[];
  vsList:VehicleConfiguration[]=[]


  id!:String
  fleet:Fleet= new Fleet()
  constructor(private fleetS:FleetConfigService,private route:ActivatedRoute,private router:Router,
    private companyService:ComapnyConfigService,private vehicleServ:VehicleServiceService,private snackBar:MatSnackBar,private vehicle:VehicleConfigService) { }

  ngOnInit(): void {

    this.getCompanies();
    this.getService();
    this.getVehicles();

    this.id= this.route.snapshot.params['id']
  

    this.fleetS.getFleetById(this.id).subscribe(data=>{

      this.fleet= data;

      console.log(this.fleet)
    })
  }


  onSubmit(){

    this.fleetS.updateFleet(this.id,this.fleet).subscribe(data=>{


      if(this.fleet.name == ""){
        this.ErrorSnack();
      }
      else{
        this.gotoFleet();
        this.openSnackBar();
      }
      
      
    })

  }
  gotoFleet(){
    this.router.navigate(['/fleet']);
  }

  getCompanies(){

    this.companyService.getCompany().subscribe(data=>{

      this.company = data;
      console.log(data);
      
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
   
    })
  }

  filterVehicles(event:any){

  
  
 }
// filteredVehicles(event: any) {
//   console.log("filter event", event);
  
//   this.vsList = Object.assign([],this.vehicles);
//   this.vsList = this.vsList.filter(
//   (companyVehicles) =>
//   event.value.companyName == companyVehicles.company?.companyName  
//   );
//   }


  openSnackBar(){
  
    this.snackBar.open("Edited successfully", "Dismiss");
  
  }
  ErrorSnack(){
  
  this.snackBar.open("Please fill the form!","Dismiss")
  }

  compareObjects(o1: any, o2: any): boolean {
    return  o1.id === o2.id;
  }
}
