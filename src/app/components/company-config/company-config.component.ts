import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyConfiguration } from 'src/app/interfaces/CompanyConfig';
import { ComapnyConfigService } from 'src/app/services/comapny-config.service';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-company-config',
  templateUrl: './company-config.component.html',
  styleUrls: ['./company-config.component.css']
})
export class CompanyConfigComponent implements OnInit {


  company?:CompanyConfiguration[]
  displayedColums:String[]=['companyName','address','description','actions']
  dataSource!: MatTableDataSource<CompanyConfiguration>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private companyService:ComapnyConfigService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.getCompanies();

  }

  getCompanies(){

    this.companyService.getCompany().subscribe(data=>{

      this.company = data;

    this.dataSource = new MatTableDataSource(this.company)
    this.dataSource!.paginator=this.paginator

    })

  }

  updateCompany(id:String){

    this.router.navigate(['/update-company',id])
    

  }

  deleteCompany(id:String){


    if(confirm("Are you sure you want to delete it?")){

      this.companyService.deleteCompany(id).subscribe(data=>{

        alert("You cant delete a company who has vehicles. If it is deleted then that company has no vehicles")

        this.getCompanies();
      })

    }
 

  }


}
