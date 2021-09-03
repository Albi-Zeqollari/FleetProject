import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'jquery';
import { CompanyConfiguration, Fleet } from 'src/app/interfaces/Fleet';
import { ComapnyConfigService } from 'src/app/services/comapny-config.service';
import { FleetConfigService } from 'src/app/services/fleet-config.service';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {
  
  company?:CompanyConfiguration[]
  fleet? :Fleet[]
  flet!: MatTableDataSource<any>
  displayedColums:String[]=['name','companyArray','actions']
  displayedColumns:String[]=['companyName']


  constructor(private fl:FleetConfigService,private comp:ComapnyConfigService,private router:Router) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {

    this.getFleet();
    this.getCompanies();

    
  }


  getFleet(){
    this.fl.getFleet().subscribe(data=>{

   
      this.fleet = data;
      console.log(data);
      

      data.map((x:any)=> x.companyArray = x.companyArray.companyName)
      console.log(data);
      
      
      this.flet = new MatTableDataSource(this.fleet)


    })
  }

  getCompanies(){

    this.comp.getCompany().subscribe(data=>{

      
      this.company = data;
    })

  }

  updateFleet(id:String){

    this.router.navigate(['/update-fleet',id]);

  }

  deleteFleet(id:String){


    if(confirm("Are you sure you want to delete this?")){
      this.fl.deleteFleet(id).subscribe(data=>{

        this.getFleet();
      })

    }
    
  }


  applyFilter(event: any) {

    const filterValue = (event.target as HTMLInputElement).value;
  
    this.flet.filter = filterValue.trim().toLowerCase();
  }


}
