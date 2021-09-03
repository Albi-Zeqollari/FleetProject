
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyConfiguration } from '../interfaces/CompanyConfig';
import { ComapnyConfigService } from '../services/comapny-config.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  id!:String
  
  company:CompanyConfiguration = new CompanyConfiguration();
  url: any;

  constructor(private Com:ComapnyConfigService,private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {

    this.id =this.route.snapshot.params['id'];

    this.Com.getCompanybyID(this.id).subscribe(data=>{

      this.company = data;

      console.log(this.company)
    })
  }

  onSubmit(){


    this.Com.updateCompany(this.id,this.company).subscribe(data=>{

    

      if(this.company.companyName == ""){
        this.ErrorSnack();
      }
      else{
        this.gotoCompany();
        this.openSnackBar();
      }
      
    })
  }

  gotoCompany(){

    this.router.navigate(['/company'])
  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
}

readUrl(event:any) {


  if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
          this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
  }
}



openSnackBar(){
  
  this.snackBar.open("Edited successfully", "Dismiss");

}
ErrorSnack(){

this.snackBar.open("Please fill the form!","Dismiss")
}

}
