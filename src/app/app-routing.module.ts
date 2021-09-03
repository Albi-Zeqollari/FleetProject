import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyConfigComponent } from './components/company-config/company-config.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { VehicleConfigComponent } from './components/vehicle-config/vehicle-config.component';
import { VehicleServiceComponent } from './components/vehicle-service/vehicle-service.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateFleetComponent } from './create-fleet/create-fleet.component';

import { CreateVehicleconfigComponent } from './create-vehicleconfig/create-vehicleconfig.component';
import { CreateVehicleserviceComponent } from './create-vehicleservice/create-vehicleservice.component';
import { HomeComponent } from './home/home.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UpdateFleetComponent } from './update-fleet/update-fleet.component';
import { UpdateServicesComponent } from './update-services/update-services.component';
import { UpdateVehicleconfigComponent } from './update-vehicleconfig/update-vehicleconfig.component';

const routes: Routes = [


  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},


   {path:'company',component:CompanyConfigComponent},
   {path:'create-company',component:CreateCompanyComponent},
   {path:'update-company/:id',component:UpdateCompanyComponent},
   
   

   {path:'vehicles',component:VehicleConfigComponent},
   {path:'create-vehicles',component:CreateVehicleconfigComponent},
   {path:'update-vehicles/:id',component:UpdateVehicleconfigComponent},

  

   {path:'services',component:VehicleServiceComponent},
   {path:'create-vehicleservice',component:CreateVehicleserviceComponent},
   {path:'update-service/:id',component:UpdateServicesComponent},
   
  
   
   {path:'fleet',component:FleetComponent},
   {path:'create-fleet',component:CreateFleetComponent},
   {path:'update-fleet/:id',component:UpdateFleetComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
