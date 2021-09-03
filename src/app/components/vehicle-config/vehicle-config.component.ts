import { Component, OnInit } from '@angular/core';
import { CompanyConfiguration, VehicleConfiguration } from 'src/app/interfaces/VehicleConfig';
import { VehicleConfigService } from 'src/app/services/vehicle-config.service';
import { ComapnyConfigService } from 'src/app/services/comapny-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-config',
  templateUrl: './vehicle-config.component.html',
  styleUrls: ['./vehicle-config.component.css']
})
export class VehicleConfigComponent implements OnInit {

  company?:CompanyConfiguration[]

  vehicles?:VehicleConfiguration[]

  displayedColumns:String[]=['vehicleName','company','vehicleEngine','actions']

  displayedColums:String[]=['companyName']

  constructor(private vehic:VehicleConfigService,private comp:ComapnyConfigService,private router:Router) { }

  ngOnInit(): void {

    this.getVehicles();
    this.getCompanies();
  }


  getVehicles(){
    this.vehic.getVehicle().subscribe(data=>{

      this.vehicles = data;
    })
  }
  getCompanies(){

    this.comp.getCompany().subscribe(data=>{

      this.company = data;
    })

  }

  updateVehicle(id:String){

    this.router.navigate(['/update-vehicles',id])

  }

  deleteVehicle(id:String){
    
    if(confirm("Are you sure you want to delete this?")){

      this.vehic.deleteVehicle(id).subscribe(data=>{

        this.getVehicles();
      })
    }
   
  }
}


