import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ThemeService } from 'src/core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  params :FormGroup;
  isDarkTheme: Observable<boolean>;
  isRedTheme : Observable<boolean>;
  constructor( public formBuilder : FormBuilder , public themeService : ThemeService) { 
    this.params = this.formBuilder.group({
      submit : ['']
    })
  }

  onSubmit() {
    console.log(this.params.value)
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
