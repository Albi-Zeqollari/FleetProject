import { NgModule,} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyConfigComponent } from './components/company-config/company-config.component';
import { VehicleConfigComponent } from './components/vehicle-config/vehicle-config.component';
import { VehicleServiceComponent } from './components/vehicle-service/vehicle-service.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { RoutingModule } from './routing/routing.module'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './navigation/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component'
import {MatListModule} from '@angular/material/list';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {MatButtonModule} from '@angular/material/button';
import { CreateCompanyComponent } from './create-company/create-company.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateVehicleserviceComponent } from './create-vehicleservice/create-vehicleservice.component';
import { CreateVehicleconfigComponent } from './create-vehicleconfig/create-vehicleconfig.component';
import { CreateFleetComponent } from './create-fleet/create-fleet.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UpdateVehicleconfigComponent } from './update-vehicleconfig/update-vehicleconfig.component';
import { UpdateServicesComponent } from './update-services/update-services.component';
import { UpdateFleetComponent } from './update-fleet/update-fleet.component';
import { ToastrModule } from 'ngx-toastr';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ErrorStateMatcher} from '@angular/material/core';
import "@angular/compiler"
import {MatPaginatorModule} from '@angular/material/paginator';






@NgModule({
  declarations: [
    AppComponent,
    CompanyConfigComponent,
    VehicleConfigComponent,
    VehicleServiceComponent,
    FleetComponent,
    HeaderComponent,
    HomeComponent,
    SidenavListComponent,
    CreateCompanyComponent,
    CreateVehicleserviceComponent,
    CreateVehicleconfigComponent,
    CreateFleetComponent,
    UpdateCompanyComponent,
    UpdateVehicleconfigComponent,
    UpdateServicesComponent,
    UpdateFleetComponent,
    DialogComponent,
    
   
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    RoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    ToastrModule.forRoot(),
    MatSnackBarModule,
    MatDialogModule,
    MatPaginatorModule,
    
    

    
    
  ],
  providers: [ErrorStateMatcher,],
  bootstrap: [AppComponent],
  exports:[

    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSelect,
    MatSelectModule,
    CompanyConfigComponent,
    VehicleConfigComponent,
    VehicleServiceComponent,
    FleetComponent,
    HeaderComponent,
    HomeComponent,
    SidenavListComponent,
    CreateCompanyComponent,
    CreateVehicleserviceComponent,
    CreateVehicleconfigComponent,
    CreateFleetComponent,
    UpdateCompanyComponent,
    UpdateVehicleconfigComponent,
    UpdateServicesComponent,
    UpdateFleetComponent,
    DialogComponent,
    


  ],

  
})
export class AppModule { }
