import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyConfiguration } from '../interfaces/CompanyConfig';
import { ComapnyConfigService } from '../services/comapny-config.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css'],
})
export class CreateCompanyComponent implements OnInit {
  createCompany: CompanyConfiguration = new CompanyConfiguration();
  url: any;

  constructor(
    private companyserv: ComapnyConfigService,
    private router: Router,
    private toastr: ToastrService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  saveCompany() {
    this.companyserv.createCompany(this.createCompany).subscribe((data) => {
      this.gotoCompany();
    });
  }

  gotoCompany() {
    this.router.navigate(['/company']);
  }

  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }

  onSubmit() {
    if (
      this.createCompany.companyName == null ||
      this.createCompany.description == null ||
      this.createCompany.address == null ||
      this.createCompany.email == null
    ) {
      this.ErrorSnack();
    } else {
      this.saveCompany();
      this.openSnackBar();
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.createCompany.companyLogo = e.target.result;
      };
      
      reader.readAsText(inputNode.files[0]);
    }

  
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
  

  openSnackBar() {
    this.snackBar.open('Added successfully', 'Dismiss');
  }
  ErrorSnack() {
    this.snackBar.open('Please fill the form!', 'Dismiss');
  }
  ErrorSnack1() {
    this.snackBar.open(
      'This company already exits.Try a different name!',
      'Dismiss'
    );
  }
}
