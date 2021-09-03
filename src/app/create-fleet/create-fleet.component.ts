import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CompanyConfiguration } from '../interfaces/CompanyConfig';
import { Fleet } from '../interfaces/Fleet';
import { VehicleConfiguration } from '../interfaces/VehicleConfig';
import { VehicleServices } from '../interfaces/VehicleService';
import { ComapnyConfigService } from '../services/comapny-config.service';
import { FleetConfigService } from '../services/fleet-config.service';
import { VehicleConfigService } from '../services/vehicle-config.service';
import { VehicleServiceService } from '../services/vehicle-service.service';

@Component({
  selector: 'app-create-fleet',
  templateUrl: './create-fleet.component.html',
  styleUrls: ['./create-fleet.component.css'],
})
export class CreateFleetComponent implements OnInit {
  createFleet: Fleet = new Fleet();

  vehicles!: VehicleConfiguration[];
  service: VehicleServices[] = [];
  company?: CompanyConfiguration[]
  fleet: Fleet[] = [];
  vsList!:VehicleConfiguration[]

  constructor(
    private router: Router,
    private fleetserv: FleetConfigService,
    private companyService: ComapnyConfigService,
    private vehicleServ: VehicleServiceService,
    private snackBar: MatSnackBar,
    private vehicle: VehicleConfigService
  ) {}

  ngOnInit(): void {
    this.getCompanies();
    this.getService();
    this.getFleet();
    this.getVehicles();
  }

  saveFleet() {
    this.fleetserv.createFleet(this.createFleet).subscribe((data) => {
      this.gotoFleet();
    });
  }

  gotoFleet() {
    this.router.navigate(['/fleet']);
  }

  onSubmit() {
    if (this.createFleet.name == null) {
      this.ErrorSnack();
    } else {
      this.saveFleet();
      this.openSnackBar();
    }
  }

  getCompanies() {
    this.companyService.getCompany().subscribe((data) => {
      this.company = data;
    });
  }

  getService() {
    this.vehicleServ.getService().subscribe((data) => {
      this.service = data;
    });
  }
  getFleet() {
    this.fleetserv.getFleet().subscribe((data) => {
      this.fleet = data;
      console.log(this.createFleet);
    });
  }

  getVehicles() {
    this.vehicle.getVehicle().subscribe((data) => {
      
      
      this.vehicles = data;
      console.log(this.vehicles)
    });
  }

  openSnackBar() {
    this.snackBar.open('Added successfully', 'Dismiss');
  }
  ErrorSnack() {
    this.snackBar.open('Please fill the form!', 'Dismiss');
  }

  filterVehicles(event: any) {
    console.log("filter event", event);
    
  
    this.vehicles = this.vehicles.filter(
    (companyVehicles) =>
    event.value.companyName == companyVehicles.company?.companyName
    );
    }
  

}
