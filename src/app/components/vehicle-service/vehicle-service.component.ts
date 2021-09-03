import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleServices } from 'src/app/interfaces/Fleet';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-vehicle-service',
  templateUrl: './vehicle-service.component.html',
  styleUrls: ['./vehicle-service.component.css']
})
export class VehicleServiceComponent implements OnInit {

  service?:VehicleServices[]
  displayedColumns:String[]=['serviceName','timeFrequency','kilometerFrequency','actions']

  constructor(private vehicleServ:VehicleServiceService,private router:Router) { }

  ngOnInit(): void {

    this.getService();
  }

  getService(){
    this.vehicleServ.getService().subscribe(data=>{

      this.service= data;
    })
  }


  updateServices(id:String){

    this.router.navigate(['/update-service',id])
  }

  deleteServices(id:String){
    
    if(confirm("Are you sure you want to delete this")){
      this.vehicleServ.deleteService(id).subscribe(data=>{

        this.getService();
        
      })
      alert("You delete the service from the vehicle too!")
    }

  }

}
