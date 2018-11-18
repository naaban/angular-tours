import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, NgModel, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ThemeService } from 'src/core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss']
})
export class CreatePackageComponent implements OnInit {

  params: FormGroup;
  image : any = {
    url : "assets/img/img.jpg"
  }
  countries: any = ['America', 'Canada']
  cities: any = ['Bangalore', 'Chennai', 'Mysore', 'Coimbatore']
  adults: any = ['0', '1', '2', '3', '4']
  childrens: any = ['0', '1', '2', '3', '4']

  selectedCountry: any;
  selectedCity: any;
  noOfAdult: any;
  noOfChildren: any;
  arvalDate: any;
  depDate: any;
  date: any;
  isDarkTheme: Observable<boolean>;
  isRedTheme : Observable<boolean>;
  constructor(private themeService: ThemeService ,public apiService : ApiService, public formBuilder : FormBuilder, public snackBar : MatSnackBar) {
    this.params = formBuilder.group({
      fullname : [''],
      email : [''],
      mobile : [''],
      arrDate: [''],
      depDate: [''],
      visits : this.formBuilder.array([]),
    
    })
  }
  initCountry() {
    return this.formBuilder.group({
          country : [''],
          city : [''],
          noOfAdults : [''],
          noOfChildrens : ['']
    });
}
  onSubmit(){
    console.log(this.params)
    // const control = <FormArray>this.params.controls['visits'];
    this.apiService.addCreatePackage(this.params.value).then(d=>{
      this.openSnackBar("Successfully Created" , "Close")
      console.log(d)
    })
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  addCountry() {
    let control = <FormArray>this.params.controls['visits'];
    control.push(this.initCountry());
}
  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.isRedTheme = this.themeService.isRedTheme;
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
    console.log(checked);
  }
  toggleRedTheme(checked: boolean) {
    this.themeService.setRedTheme(checked);
    console.log(checked);
  }

}
